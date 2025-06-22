// lib/fetchdata
"use server";
export async function fetchData<T>(endpoint: string): Promise<T> {
  const base = process.env.BASE_URL;
  const res = await fetch(`${base + endpoint}`, {
    method: "GET",
    headers: {
      Authorization: process.env.API_AUTH_KEY,
    },
    next: { revalidate: 86400 }, // 24 hours cache on server
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Fetch error: ${res.status}`);
  }

  return res.json();
}
