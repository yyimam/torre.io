'use client';
import JobDetailCard from "@/app/components/jobDetail";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

import { useJobDetail } from "../hooks/jobDetails.hook";

const JobDetailsPage = () => {
  const params = useParams();
  const slug = params?.id as string; // folder name is [id]

  const { job, loading, error } = useJobDetail(slug as string);
  console.log("Job Details Page - slug:", slug);
  if (loading) return <p className="text-center mt-8">Loading job...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;
  if (!job) return <p className="text-center mt-8">Job not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <JobDetailCard job={job} />
    </div>
  );
};

export default JobDetailsPage;
