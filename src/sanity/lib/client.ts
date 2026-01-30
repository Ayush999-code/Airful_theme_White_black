import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

const config = {
  projectId: projectId || "dummy",
  dataset: dataset || "dummy",
  apiVersion: apiVersion,
  useCdn: true,
};

export const client = createClient(config);
