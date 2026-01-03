'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { jobResponse } from "@/app/interface/job.interface";
import { ENDPOINTS } from "@/app/api-client/endpoint";

const API_URL = process.env.NEXT_PUBLIC_SEARCH_API_URL || "https://localhost:3000/api/jobs"; // Replace with your endpoint

export const useJobs = () => {
  const [jobs, setJobs] = useState<jobResponse>({ total: "0", size: "0", results: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        console.log("Fetching jobs from:", API_URL);
        const response = await axios.post<jobResponse>(API_URL + ENDPOINTS.OPPORTUNITIES);
        setJobs(response.data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
};


// hooks/useJobs.ts
// import { useEffect, useState } from "react";
// // import { Job } from "@/app/types/job";
// // import { JobFilter } from "@/app/types/jobFilter";
// import axios from "axios";
// import { JobFilter } from "@/app/interface/jobFilter.interface";
// import { Job } from "@/app/interface/job.interface";
// import { ENDPOINTS } from "@/app/api-client/endpoint";

// const API_URL = process.env.NEXT_PUBLIC_SEARCH_API_URL;

// export const useJobs = (filters: JobFilter) => {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.post(`${API_URL}${ENDPOINTS.OPPORTUNITIES}`, {
//           params: {
//             currency: filters.currency,
//             periodicity: filters.periodicity,
//             lang: filters.lang,
//             size: filters.size,
//           },
//         });
//         setJobs(response.data);
//       } catch (err: any) {
//         setError("Failed to fetch jobs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, [filters]);

//   return { jobs, loading, error };
// };
