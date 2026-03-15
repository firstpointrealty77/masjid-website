import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type MasjidalMonthlyItem = {
  mst_id: number;
  m_id: number;
  mst_date: string;
  mst_fajr: string;
  mst_sunrise: string;
  mst_zuhr: string;
  mst_asr: string;
  mst_maghrib: string;
  mst_isha: string;
};

type MasjidalMonthlyGroup = {
  key: string;
  list: MasjidalMonthlyItem[];
};

type MasjidalMonthlyResponse = {
  status: boolean;
  response: MasjidalMonthlyGroup[];
};

function getDefaultMonthYear() {
  const now = new Date();
  return {
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const defaults = getDefaultMonthYear();
  const month = Number(searchParams.get("month") || defaults.month);
  const year = Number(searchParams.get("year") || defaults.year);

  const masjidNumericId = 8862;
  const apiUrl = `https://api.prod.portal.masjidal.com/salah-timings/get-salah-timings/${masjidNumericId}?month=${month}&year=${year}`;

  try {
    const res = await fetch(apiUrl, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
        Origin: "https://portal.masjidal.com",
        Referer: "https://portal.masjidal.com/",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: `Failed to fetch monthly data (${res.status})`,
          apiUrl,
        },
        { status: 500 }
      );
    }

    const data = (await res.json()) as MasjidalMonthlyResponse;

    if (!data?.status || !Array.isArray(data?.response)) {
      return NextResponse.json(
        {
          error: "Unexpected monthly API response shape.",
          apiUrl,
        },
        { status: 500 }
      );
    }

    const group = data.response.find(
      (g) => Array.isArray(g.list) && g.list.length > 0
    );

    if (!group) {
      return NextResponse.json(
        {
          error: "No monthly rows returned from Masjidal.",
          apiUrl,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: true,
      source: "masjidal-monthly-api",
      apiUrl,
      month,
      year,
      monthTitle: group.key,
      rows: group.list,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to fetch monthly timetable.",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}