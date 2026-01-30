import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

const config = {
  projectId: projectId || "dummy",
  dataset: dataset || "dummy",
  apiVersion: apiVersion,
  useCdn: false, // Disable CDN to ensure consistent published data fetching
  perspective: "published" as const, // Explicitly query published documents
};

export const client = createClient(config);
