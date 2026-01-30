import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

const shouldLog = process.env.NODE_ENV === 'development' || !!process.env.VERCEL;

if (shouldLog) {
  console.log('[Sanity Client] Initializing with config:', {
    projectId: projectId || 'NOT_SET',
    dataset: dataset || 'NOT_SET',
    apiVersion: apiVersion,
  });
}

const config = {
  projectId: projectId || "dummy",
  dataset: dataset || "dummy",
  apiVersion: apiVersion,
  useCdn: false, // Disable CDN to ensure consistent published data fetching
  perspective: "published" as const, // Explicitly query published documents
};

export const client = createClient(config);
