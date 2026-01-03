// components/JobCard.tsx
// import { Job } from "../types/job";

import Link from "next/link";
import { Job } from "../interface/job.interface";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-6 my-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2"><Link href={`/jobs/${job.id}`}>{job.objective}</Link></h2>
      <p className="text-gray-600 mb-4">{job.tagline}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span className="capitalize">{job.type.replace("-", " ")}</span>
        <span>{job.remote ? "Remote" : "On-site"}</span>
      </div>
     {/* <p>Get Details</Link></p> */}
      {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Apply Now
      </button> */}
    </div>
  );
};

export default JobCard;
