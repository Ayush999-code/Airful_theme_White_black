import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing env vars. Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const legacyFields = [
  "excerpt",
  "description",
  "image",
  "solution",
  "category",
  "tags",
];

const docs = await client.fetch(`*[_type=="caseStudy"]{_id}`);
let updated = 0;

for (const doc of docs) {
  await client.patch(doc._id).unset(legacyFields).commit();
  updated += 1;
}

console.log(`Updated ${updated} caseStudy document(s).`);
