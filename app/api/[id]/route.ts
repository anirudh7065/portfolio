import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";
import { PostgrestError } from "@supabase/supabase-js";


type Params = Promise<{ id: string }>;

export async function GET(
  request: Request,
  context: { params: Params }
) {
  const params = await context.params;
  const { id } = params;
  const validIds = [
    "certificates",
    "projects",
    "contacts",
    "languages",
    "navigations",
    "socials",
    "semesters",
  ] as const;

  if (!validIds.includes(id as (typeof validIds)[number])) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const { data, error }: { data: unknown[] | null; error: PostgrestError | null } =
    await supabaseServer.from(id).select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  

  return NextResponse.json(data, {
    status: 200,
    headers: {
      // Cache for 24 hours, allow stale while revalidating for 1 min
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=60",
      // Optional, for security best practices
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    },
  });
}
