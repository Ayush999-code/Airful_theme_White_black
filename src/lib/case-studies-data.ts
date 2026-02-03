import { client } from "@/sanity/lib/client";
import { isConfigured } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";

type CaseStudyCard = {
  title: string;
  href: string;
  thumbnail?: string;
  _id?: string;
};

type SanityCaseStudy = {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
};

// Development fallback data - only used when Sanity is not configured in development
const staticCaseStudies: CaseStudyCard[] = [
  {
    title: "Alistair Langer",
    href: "/case-studies/alistair-langer",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    title: "GitStart",
    href: "/case-studies/gitstart",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    title: "Le Roma Gardenia",
    href: "/case-studies/le-roma-gardenia",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  },
  {
    title: "Tempest House",
    href: "/case-studies/tempest-house",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
];

const sanityQuery = `*[_type == "caseStudy"] | order(_createdAt desc)[0...4] {
  _id,
  title,
  slug,
  thumbnail
}`;

export async function getCaseStudies(): Promise<CaseStudyCard[]> {
  // Check if Sanity is configured
  if (!isConfigured()) {
    // Only use fallback in development mode
    if (process.env.NODE_ENV === "development") {
      console.log("[CaseStudies] Sanity not configured, using fallback data (dev mode only)");
      return staticCaseStudies;
    }
    // In production without Sanity, return empty array
    console.log("[CaseStudies] Sanity not configured, returning empty array (production)");
    return [];
  }

  try {
    const data = await client.fetch<SanityCaseStudy[]>(sanityQuery);

    if (!data || data.length === 0) {
      console.log("[CaseStudies] No data returned from Sanity");
      return process.env.NODE_ENV === "development" ? staticCaseStudies : [];
    }

    // Map Sanity data to UI format
    const mappedData = data
      .map((study) => {
        const slugCurrent = study.slug?.current;
        if (!slugCurrent) return null;
        return {
          title: study.title,
          href: `/case-studies/${slugCurrent}`,
          thumbnail: study.thumbnail
            ? urlFor(study.thumbnail).width(800).height(600).fit("crop").url()
            : undefined,
          _id: study._id,
        };
      })
      .filter(Boolean) as CaseStudyCard[];

    console.log("[CaseStudies] Successfully fetched", mappedData.length, "case studies");
    return mappedData;
  } catch (error) {
    console.error("[CaseStudies] Failed to fetch from Sanity:", error);
    // In production, return empty on error. In dev, return fallback.
    return process.env.NODE_ENV === "development" ? staticCaseStudies : [];
  }
}

