export type CaseStudy = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  challenges: string[];
  solutions: { title: string; items: string[] }[];
  results: string[];
  projectUrl?: string;
};

export const caseStudiesData: Record<string, CaseStudy> = {
  "alistair-langer": {
    title: "Alistair Langer",
    subtitle: "From Email Migration to Full-Spectrum Business Partnership",
    category: "Digital Marketing",
    description:
      "Transforming a portfolio entrepreneur's fragmented systems into a cohesive operational ecosystem through email migration, documentation systems, CRM implementation, and ongoing podcast and website management.",
    challenges: [
      "Fragmented email communications spread across multiple accounts impacting productivity",
      "Lack of structured documentation and project management for outreach initiatives",
      "Inefficient business development processes across portfolio companies",
      "Disorganized podcast production and guest outreach workflows",
      "No centralized contact management system",
      "Limited capacity for website maintenance and strategic digital presence",
    ],
    solutions: [
      {
        title: "Infrastructure",
        items: [
          "Email consolidation via AnyDesk sessions into Gmail",
          "Custom Coda documentation system",
          "Dedicated podcast tracking systems",
        ],
      },
      {
        title: "CRM Implementation",
        items: [
          "Built a customized Attio CRM with unique schema and tagging",
          "Integrated multiple data sources",
          "Automated workflow management",
        ],
      },
      {
        title: "Ongoing Support",
        items: [
          "Expanded LinkedIn outreach capabilities",
          "Provided data enrichment services",
          "Assumed website maintenance",
          "Streamlined podcast post-production",
        ],
      },
    ],
    results: [
      "Streamlined email ecosystem",
      "Custom Coda project management system",
      "Tailor-made Attio CRM with automated workflows",
      "Enhanced LinkedIn outreach effectiveness",
      "Consistent website presence and podcast publication",
    ],
  },
  "tempest-house": {
    title: "Tempest House",
    subtitle: "Strategic Growth Partnership",
    category: "Digital Marketing",
    description:
      "Transforming Tempest House through comprehensive marketing strategies, operational support, and talent acquisition services that led to increased client satisfaction, revenue growth, and a lasting strategic partnership.",
    challenges: [
      "Weak social media presence with inconsistent brand communication",
      "Underutilized LinkedIn for lead generation",
      "Poor-performing email marketing and conversion rates",
      "Talent acquisition bottlenecks impacting project delivery",
      "Client satisfaction issues from stretched resources",
      "Difficulty growing revenue while maintaining service quality",
    ],
    solutions: [
      {
        title: "Marketing Transformation",
        items: [
          "Developed unified social media presence with branded messaging",
          "Created LinkedIn campaigns targeting industry leaders",
          "Redesigned email workflows with personalization and segmentation",
          "Implemented performance analytics",
        ],
      },
      {
        title: "Operational Excellence",
        items: [
          "Streamlined recruitment processes",
          "Provided project management support",
          "Established quality assurance standards",
          "Built scalable systems for sustainable growth",
        ],
      },
      {
        title: "Strategic Partnership",
        items: [
          "Regular leadership planning sessions",
          "Collaborative market exploration",
          "Joint research initiatives",
          "Relationship-building focused on transparent communication",
        ],
      },
    ],
    results: [
      "Unified brand presence across all channels",
      "Improved lead generation from LinkedIn",
      "Higher email conversion rates",
      "Streamlined talent acquisition",
      "Increased client satisfaction",
      "Sustainable revenue growth",
    ],
  },
  gitstart: {
    title: "GitStart",
    subtitle: "Scaling a Y Combinator-Backed Developer Platform",
    category: "Automation",
    description:
      "Transforming GitStart's growth on two critical fronts: scaling customer acquisition through targeted outreach campaigns and expanding their global developer community through sophisticated recruitment operations.",
    challenges: [
      "Minimal demo booking rates (only 1-2 per week)",
      "Inadequate strategy for reaching target customers",
      "Tiny developer network of approximately 20 people",
      "Inefficient talent identification and hiring workflows",
      "Disconnected processes for both business development and recruiting",
    ],
    solutions: [
      {
        title: "Client Acquisition",
        items: [
          "Refined customer profiles with internal stakeholders",
          "Enhanced messaging and documentation",
          "Executed data-driven campaigns with scraping and enrichment techniques",
          "Utilized LinkedIn and email tools (Dux Soup, Lemlist)",
          "Established optimization frameworks",
        ],
      },
      {
        title: "Talent Expansion",
        items: [
          "Engineered custom Retool systems for candidate management",
          "Deployed GitHub-based developer sourcing",
          "Standardized interview evaluation procedures with documented grading systems",
          "Created scalable infrastructure for handling increased applicant volume",
        ],
      },
    ],
    results: [
      "Significantly increased demo booking rates",
      "Expanded developer network globally",
      "Streamlined candidate management process",
      "Scalable recruitment infrastructure",
      "Data-driven outreach optimization",
    ],
  },
  "le-roma-gardenia": {
    title: "Le Roma Gardenia",
    subtitle: "From Vision to Luxury Destination",
    category: "Web Development",
    description:
      "Transforming a single property into a renowned hospitality brand across South India with comprehensive branding, web development, and custom operational systems.",
    challenges: [
      "Establishing a luxury brand identity from ground zero",
      "Building digital presence in a saturated hospitality market",
      "Creating operational systems for staff lacking technical expertise",
      "Generating bookings for an entirely unknown property",
      "Operating with minimal initial revenue and brand recognition",
    ],
    solutions: [
      {
        title: "Brand Development",
        items: [
          "Discovered honeybees on the property, inspiring an elegant logo",
          "Used gold and black to communicate luxury and opulence",
          "Created cohesive brand identity across all touchpoints",
        ],
      },
      {
        title: "Digital Experience",
        items: [
          "Built an immersive website using Webflow",
          "Balanced aesthetic beauty with strategic conversion elements",
          "Designed to transform visitors into guests",
        ],
      },
      {
        title: "Technical Infrastructure",
        items: [
          "Created a custom Coda-based booking system",
          "Built intuitive interfaces for non-technical staff",
          "Implemented calendar integration and automated emails",
          "Added lightweight CRM capabilities",
        ],
      },
      {
        title: "Marketing Strategy",
        items: [
          "Implemented targeted social media and SEO campaigns",
          "Strategically pivoted toward high-value wedding bookings",
          "Identified and capitalized on market opportunities",
        ],
      },
    ],
    results: [
      "Established luxury brand identity",
      "Immersive digital presence",
      "Custom booking management system",
      "Successful pivot to wedding market",
      "Sustainable booking pipeline",
    ],
    projectUrl: "https://www.leromahotelsandresorts.com/",
  },
};
