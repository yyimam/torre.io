// components/JobFilter.tsx
'use client';

// import { JobFilter } from "@/app/types/jobFilter";

interface Props {
  filters: any;
  onChange: (filters: any) => void;
}

const JobFilter = ({ filters, onChange }: Props) => {
  return (
    <div className="bg-white p-4 rounded-md shadow mb-6 flex flex-wrap gap-4">
      <select
        className="border p-2 rounded"
        value={filters.currency}
        onChange={(e) => onChange({ ...filters, currency: e.target.value })}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <select
        className="border p-2 rounded"
        value={filters.periodicity}
        onChange={(e) => onChange({ ...filters, periodicity: e.target.value })}
      >
        <option value="hourly">Hourly</option>
        <option value="monthly">Monthly</option>
      </select>

      <select
        className="border p-2 rounded"
        value={filters.lang}
        onChange={(e) => onChange({ ...filters, lang: e.target.value })}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>

      <select
        className="border p-2 rounded"
        value={filters.size}
        onChange={(e) => onChange({ ...filters, size: Number(e.target.value) })}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default JobFilter;
