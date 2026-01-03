'use client';
import { useEffect, useState } from "react";
// import { JobDetail } from "../types/jobDetail";
import axios from "axios";
import { JobDetail } from "@/app/interface/jobDetails.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useJobDetail = (slug: string) => {
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchJobDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get<JobDetail>(
          `${API_URL}/suite/opportunities/${slug}`
        );
        setJob(response.data);
      } catch (err: any) {
        setError(err?.message || "Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [slug]);

  return { job, loading, error };
};
