// types/jobDetail.ts
export interface JobDetail {
  id: string;
  opportunity: string;
  mode: string;
  objective: string;
  tagline: string;
  completion: number;
  attachments: any[];
  active: boolean;
  created: string;
  stableOn: string;
  review: string;
  status: string;
  boardVersion: number;
  locale: string;
  isTalentSeekerInactive: boolean;
  distributeInMarketplace: boolean | null;
  personalIdActiveCountries: string[] | null;
  messengerTopicsEnabled: boolean;
  slug: string;
}
