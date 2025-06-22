// app/hooks/usefetchdata 
"use client";

import useSWR from "swr";
import { fetchData } from "@/lib/fetchdata";

const fetcher = async <T>(url: string): Promise<T> => {
  const res: T  = await fetchData(url);
  return res;
};

export function useFetchData<T>(endpoint: string) {
  const { data, error, isLoading } = useSWR<T>(endpoint, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 86400,
  });

  return {
    data,
    loading: isLoading,
    error: error?.message || null,
  };
}
