import fs from "fs";
import path from "path";

export type EventImage = {
  src: string;
  filename: string;
  title: string;
  dateLabel: string;
  timestamp: number;
};

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function parseDateFromFilename(filename: string) {
  const name = filename.replace(/\.[^.]+$/, "");

  const isoMatch = name.match(/(20\d{2})[-_ ](\d{2})[-_ ](\d{2})/);
  const compactMatch = name.match(/(20\d{2})(\d{2})(\d{2})/);

  let year: number | null = null;
  let month: number | null = null;
  let day: number | null = null;

  if (isoMatch) {
    year = Number(isoMatch[1]);
    month = Number(isoMatch[2]);
    day = Number(isoMatch[3]);
  } else if (compactMatch) {
    year = Number(compactMatch[1]);
    month = Number(compactMatch[2]);
    day = Number(compactMatch[3]);
  }

  if (!year || !month || !day) return null;

  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime())) return null;

  return {
    timestamp: date.getTime(),
    dateLabel: date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

function humanizeTitle(filename: string) {
  const base = filename.replace(/\.[^.]+$/, "");

  const cleaned = base
    .replace(/(20\d{2})[-_ ]?(\d{2})[-_ ]?(\d{2})/, "")
    .replace(/^[-_\s]+/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "Community Program";

  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getEventImages(): EventImage[] {
  const eventsDir = path.join(process.cwd(), "public", "events", "archive");

  if (!fs.existsSync(eventsDir)) {
    return [];
  }

  const files = fs
    .readdirSync(eventsDir)
    .filter((file) =>
      ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase())
    )
    .filter((file) => !file.toLowerCase().startsWith("events-hero-bg"));

  const images = files.map((file) => {
    const fullPath = path.join(eventsDir, file);
    const stats = fs.statSync(fullPath);
    const parsed = parseDateFromFilename(file);

    return {
      src: `/events/archive/${file}`,
      filename: file,
      title: humanizeTitle(file),
      dateLabel: parsed?.dateLabel ?? "Community Program",
      timestamp: parsed?.timestamp ?? stats.mtimeMs,
    };
  });

  return images.sort((a, b) => b.timestamp - a.timestamp);
}