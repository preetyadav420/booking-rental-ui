import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Listing {
  title: string;
  pricePerDay: number;
  description: string;
}

interface User {
  username: string;
}

export interface ListingDto extends Listing {
  vendor: User;
}

const useListings = () => {
  const [listings, setListings] = useState<ListingDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<ListingDto[]>("/listings/mylistings", {
        signal: controller.signal,
      })
      .then((response) => {
        // console.log("Listings: ", response);
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

  const submit = async (data: Listing) => {
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
