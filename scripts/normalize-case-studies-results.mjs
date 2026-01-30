import { createClient } from "next-sanity";
import { randomUUID } from "crypto";

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

const getTextFromBlock = (block) => {
  if (!block || typeof block !== "object") return "";
  const children = block.children;
  if (!Array.isArray(children)) return "";
  return children
    .map((child) =>
      child && typeof child === "object" && typeof child.text === "string" ? child.text : ""
    )
    .join(" ")
    .trim();
};

const normalizeResults = (raw) => {
  if (!Array.isArray(raw)) return null;
  return raw
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object" && item._type === "block") {
        const text = getTextFromBlock(item);
        return text || null;
      }
      return null;
    })
    .filter(Boolean);
};

const legacyFields = ["excerpt", "solution"];

const docs = await client.fetch(`*[_type=="caseStudy"]{_id, results}`);
let updated = 0;

for (const doc of docs) {
  const patch = {};
  const normalizedResults = normalizeResults(doc.results);
  if (normalizedResults !== null) patch.results = normalizedResults;

  if (Object.keys(patch).length === 0 && legacyFields.length === 0) continue;

  const patcher = client.patch(doc._id).set(patch).unset(legacyFields);
  await patcher.commit();
  updated += 1;
}

console.log(`Updated ${updated} caseStudy document(s).`);
