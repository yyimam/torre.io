'use client';
import JobCard from "../components/jobCard";
import { useJobs } from "./hooks/jobs.hook";

const JobsPage = () => {
  const { jobs, loading, error } = useJobs();

  if (loading) return <p className="text-center mt-8">Loading jobs...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Jobs</h1>

      {jobs.results.length === 0 && (
        <p className="text-center text-gray-500">No jobs available.</p>
      )}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.results.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
      </div>
    </div>
  );
};

export default JobsPage;

