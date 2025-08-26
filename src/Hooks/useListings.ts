import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Listing {
  title: string;
  pricePerDay: number;
  description: string;
}

export interface ListingResponse {
  results: Listing[];
}

const useListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<ListingResponse>("/listings", {
        signal: controller.signal,
      })
      .then((response) => {
        console.log("Listings: ", response);
        setListings(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [success]);

  const submit = async (data: T) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await apiClient.post("/listings", data);
      setSuccess(true);
      return res.data;
    } catch (err) {
      const e = err as AxiosError;
      setError(e.message || "Something went wrong");
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return { listings, isLoading, error, submit, success };
};

export default useListings;
