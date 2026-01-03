// types/job.ts
export interface Job {
    objective: string;
    tagline: string;
    type: string;
    remote: boolean;
    id: string;
}

export interface jobResponse {
    total: string,
    size: string,
    results: Job[];
}
