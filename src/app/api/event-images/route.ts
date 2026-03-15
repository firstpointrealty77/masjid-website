import { NextResponse } from "next/server";
import { getEventImages } from "@/lib/getEventImages";

export async function GET() {
  try {
    const images = getEventImages();
    return NextResponse.json(images);
  } catch {
    return NextResponse.json(
      { error: "Failed to load event images" },
      { status: 500 }
    );
  }
}