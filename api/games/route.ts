import { NextResponse } from "next/server"
import games from "@/data/games.json"

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      games
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch games"
      },
      { status: 500 }
    )
  }
}