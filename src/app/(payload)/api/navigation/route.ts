import { NextRequest, NextResponse } from "next/server";
import { getGlobalData } from "@/api";
import config from "@payload-config";

export async function GET(request: NextRequest) {
  try {
    const resolvedConfig = await config;
    const navigationData = await getGlobalData({
      config: resolvedConfig,
      slug: "navigations",
      key: "homeNavigation",
    });
    
    return NextResponse.json(navigationData);
  } catch (error) {
    console.error("Error fetching navigation data:", error);
    return NextResponse.json({ error: "Failed to fetch navigation data" }, { status: 500 });
  }
}
