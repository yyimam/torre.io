
import { JobDetail } from "../interface/jobDetails.interface";

interface JobDetailCardProps {
  job: JobDetail;
}

const JobDetailCard = ({ job }: JobDetailCardProps) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {job.objective}
      </h1>

      <p className="text-gray-600 mb-4">{job.tagline}</p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
        <div>
          <strong>Status:</strong> {job.status}
        </div>
        <div>
          <strong>Review:</strong> {job.review}
        </div>
        <div>
          <strong>Opportunity:</strong> {job.opportunity}
        </div>
        <div>
          <strong>Mode:</strong> {job.mode}
        </div>
        <div>
          <strong>Locale:</strong> {job.locale}
        </div>
        <div>
          <strong>Completion:</strong> {job.completion * 100}%
        </div>
      </div>

      <div className="text-xs text-gray-500">
        <p>Created: {new Date(job.created).toLocaleDateString()}</p>
        <p>Stable On: {new Date(job.stableOn).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default JobDetailCard;
