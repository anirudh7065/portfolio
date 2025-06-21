export async function fetchData<T>(endpoint: string): Promise<T> {
const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001/";
  const res = await fetch(`${base + endpoint}`, {
    next: { revalidate: 86400 }, // 24 hours cache on server
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Fetch error: ${res.status}`);
  }

  return res.json();
}
