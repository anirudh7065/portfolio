"use client";

import useSWR from "swr";

const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Fetch error: ${res.status}`);
  }
  return res.json();
};

export function useFetchData<T>(endpoint: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, error, isLoading } = useSWR<T>(base+endpoint, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 86400,
  });

  return {
    data,
    loading: isLoading,
    error: error?.message || null,
  };
}
