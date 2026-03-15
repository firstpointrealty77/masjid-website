export type PrayerRow = {
  salah: string;
  adhan?: string;
  iqamah?: string;
};

function normalizeHeaderCell(s: string): string {
  return (s ?? "")
    .replace(/^\uFEFF/, "") // BOM
    .replace(/\u00A0/g, " ") // NBSP
    .replace(/[\u200B-\u200D\u2060]/g, "") // zero-width
    .trim()
    .toLowerCase();
}

/**
 * Some Google published CSVs wrap each entire line in quotes, like:
 *   "salah,adhan,iqamah"
 *   "Fajr,05:40,06:00"
 * This unwraps that safely.
 */
function unwrapWholeLineQuotes(line: string): string {
  const t = line.trim();
  if (t.length >= 2 && t.startsWith('"') && t.endsWith('"')) {
    // Remove surrounding quotes and unescape doubled quotes
    return t.slice(1, -1).replace(/""/g, '"');
  }
  return line;
}

// Basic CSV split for comma-separated values (after whole-line unwrap)
function splitCSV(line: string): string[] {
  // After unwrapping, this sheet appears to have no per-cell quoting.
  // Still handle quoted cells minimally.
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === "," && !inQuotes) {
      out.push(cur.trim());
      cur = "";
      continue;
    }

    cur += ch;
  }
  out.push(cur.trim());
  return out;
}

export function parsePrayerCSV(csvText: string): PrayerRow[] {
  const lines = csvText
    .split(/\r?\n/)
    .map((l) => unwrapWholeLineQuotes(l))
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) return [];

  const headerRaw = splitCSV(lines[0]);
  const header = headerRaw.map(normalizeHeaderCell);

  const idx = (name: string) => header.indexOf(name);

  const required = ["salah", "adhan", "iqamah"];
  for (const r of required) {
    if (idx(r) === -1) {
      throw new Error(
        `CSV missing required column: ${r}. Found headers: [${header.join(", ")}]`
      );
    }
  }

  const rows: PrayerRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = splitCSV(lines[i]);

    const get = (name: string) => {
      const j = idx(name);
      return j >= 0 ? (cols[j] ?? "").trim() : "";
    };

    const salah = get("salah");
    if (!salah) continue;

    const adhan = get("adhan");
    const iqamah = get("iqamah");

    rows.push({
      salah,
      adhan: adhan || undefined,
      iqamah: iqamah || undefined,
    });
  }

  return rows;
}
