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

const query = `*[_type=="caseStudy"]{
  _id,
  tags,
  keyResults,
  technologiesUsed,
  challenges,
  results,
  solutions
}`;

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

const toText = (value) => {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  if (typeof value.text === "string") return value.text;
  if (value._type === "block") return getTextFromBlock(value);
  return "";
};

const normalizeArray = (raw) => {
  if (!Array.isArray(raw)) return null;
  return raw
    .map((item) => {
      const text = toText(item);
      if (!text) return null;
      const key =
        item && typeof item === "object" && typeof item._key === "string"
          ? item._key
          : randomUUID();
      return { _key: key, text };
    })
    .filter(Boolean);
};

const normalizeSolutions = (raw) => {
  if (!Array.isArray(raw)) return null;
  return raw.map((solution) => {
    const items = normalizeArray(solution?.items) ?? [];
    return {
      ...solution,
      items,
    };
  });
};

const docs = await client.fetch(query);
let updated = 0;

for (const doc of docs) {
  const patch = {};

  const tags = normalizeArray(doc.tags);
  const keyResults = normalizeArray(doc.keyResults);
  const technologiesUsed = normalizeArray(doc.technologiesUsed);
  const challenges = normalizeArray(doc.challenges);
  const results = normalizeArray(doc.results);
  const solutions = normalizeSolutions(doc.solutions);

  if (tags !== null) patch.tags = tags;
  if (keyResults !== null) patch.keyResults = keyResults;
  if (technologiesUsed !== null) patch.technologiesUsed = technologiesUsed;
  if (challenges !== null) patch.challenges = challenges;
  if (results !== null) patch.results = results;
  if (solutions !== null) patch.solutions = solutions;

  if (Object.keys(patch).length === 0) continue;

  await client.patch(doc._id).set(patch).commit();
  updated += 1;
}

console.log(`Updated ${updated} caseStudy document(s).`);
