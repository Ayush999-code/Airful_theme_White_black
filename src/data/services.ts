export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: ServiceFeature[];
}

export const services: Service[] = [
  {
    slug: "recruitment-operations",
    title: "Recruitment Operations",
    category: "Automation",
    description:
      "Our Recruitment Operations service transforms how organizations manage their talent acquisition processes. We focus on designing, implementing, and optimizing the systems, tools, and workflows that power efficient and effective recruiting at scale.\n\nFrom ATS customization and integration to candidate journey mapping and process automation, we build recruitment operations that deliver exceptional results while reducing administrative burden on your teams.",
    features: [
      {
        title: "Recruitment Process Design",
        description:
          "End-to-end workflow optimization aligned with your hiring goals",
      },
      {
        title: "ATS Implementation & Customization",
        description:
          "Tailored applicant tracking systems that serve your unique requirements",
      },
      {
        title: "Recruitment Automation",
        description:
          "Identifying and implementing opportunities to streamline manual processes",
      },
      {
        title: "Hiring Analytics Framework",
        description:
          "Measurement systems to track KPIs and drive continuous improvement",
      },
      {
        title: "Candidate Experience Engineering",
        description:
          "Creating seamless, professional interactions at every touchpoint",
      },
      {
        title: "Recruitment Tech Stack Integration",
        description:
          "Connecting your tools and platforms for maximum efficiency",
      },
    ],
  },
  {
    slug: "talent-acquisition",
    title: "Talent Acquisition",
    category: "Automation",
    description:
      "Our Talent Acquisition service helps companies identify, attract, and secure top talent across specialized domains. We employ sophisticated sourcing strategies, leveraging technology and human expertise to build robust talent pipelines tailored to your organization's unique needs.\n\nFrom crafting compelling job descriptions and employer branding to implementing efficient screening processes and candidate experience management, we handle the entire talent acquisition lifecycle with precision and care.",
    features: [
      {
        title: "Strategic Talent Sourcing",
        description: "Advanced techniques to discover hidden talent pools",
      },
      {
        title: "Candidate Pipeline Development",
        description:
          "Building sustainable talent networks aligned with growth objectives",
      },
      {
        title: "Technical Screening Frameworks",
        description: "Customized assessment processes for specialized roles",
      },
      {
        title: "Employer Brand Enhancement",
        description: "Positioning your organization as an employer of choice",
      },
      {
        title: "Data-Driven Recruitment",
        description:
          "Analytics to optimize hiring effectiveness and efficiency",
      },
    ],
  },
  {
    slug: "management-consulting",
    title: "Management Consulting",
    category: "Strategy",
    description:
      "Navigate complex business challenges and drive organizational success with our expert management consulting services. We partner with leadership teams to develop actionable strategies, optimize operations, and implement transformative initiatives.\n\nOur consultants bring deep industry expertise and a practical, results-oriented approach to help you achieve sustainable competitive advantage.",
    features: [
      {
        title: "Strategic Planning",
        description:
          "Developing clear roadmaps aligned with your business objectives",
      },
      {
        title: "Organizational Design",
        description:
          "Structuring teams and processes for optimal performance",
      },
      {
        title: "Change Management",
        description:
          "Guiding organizations through transformation with minimal disruption",
      },
      {
        title: "Performance Optimization",
        description: "Identifying and eliminating operational inefficiencies",
      },
      {
        title: "Leadership Development",
        description: "Building capabilities at all levels of management",
      },
    ],
  },
  {
    slug: "business-strategy-process-transformation",
    title: "Business Strategy & Process Transformation",
    category: "Strategy",
    description:
      "Reimagine your business operations and drive sustainable growth with our strategic transformation services. We help organizations rethink their business models, streamline processes, and build capabilities for the future.\n\nFrom digital transformation roadmaps to operational excellence programs, we guide you through every step of your transformation journey.",
    features: [
      {
        title: "Business Model Innovation",
        description:
          "Exploring new revenue streams and value creation opportunities",
      },
      {
        title: "Process Reengineering",
        description:
          "Redesigning workflows for efficiency and effectiveness",
      },
      {
        title: "Digital Transformation Strategy",
        description:
          "Leveraging technology to transform business operations",
      },
      {
        title: "Operational Excellence",
        description: "Implementing best practices across your organization",
      },
      {
        title: "Growth Strategy Development",
        description: "Identifying and pursuing sustainable growth opportunities",
      },
    ],
  },
  {
    slug: "data-research-enrichment-append",
    title: "Data Research, Enrichment & Append",
    category: "Data Services",
    description:
      "Enhance the quality and completeness of your business data with our comprehensive research and enrichment services. We help organizations unlock the full potential of their data assets through systematic research, validation, and enhancement.\n\nFrom contact data enrichment to market research and competitive intelligence, we deliver actionable insights that drive better decisions.",
    features: [
      {
        title: "Contact Data Enrichment",
        description:
          "Completing and updating your contact records with verified information",
      },
      {
        title: "Company Research",
        description:
          "Deep-dive analysis of target accounts and market segments",
      },
      {
        title: "Data Validation & Cleansing",
        description: "Ensuring accuracy and consistency across your databases",
      },
      {
        title: "Market Intelligence",
        description:
          "Gathering insights on competitors, trends, and opportunities",
      },
      {
        title: "Custom Research Projects",
        description: "Tailored research to address specific business questions",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Development",
    description:
      "Extend your digital reach with custom mobile applications that engage users and drive business growth. We design and develop native and cross-platform mobile apps that deliver exceptional user experiences.\n\nFrom concept to launch and beyond, we handle the entire mobile development lifecycle with a focus on quality, performance, and user satisfaction.",
    features: [
      {
        title: "Native iOS & Android Development",
        description: "Platform-specific apps optimized for performance",
      },
      {
        title: "Cross-Platform Solutions",
        description:
          "Cost-effective apps that work across multiple platforms",
      },
      {
        title: "UI/UX Design",
        description: "Intuitive interfaces that users love",
      },
      {
        title: "Backend Integration",
        description: "Seamless connection with your existing systems",
      },
      {
        title: "App Store Optimization",
        description: "Strategies to improve visibility and downloads",
      },
      {
        title: "Ongoing Maintenance & Support",
        description: "Continuous updates and improvements post-launch",
      },
    ],
  },
  {
    slug: "data-integrations-automation",
    title: "Data Integrations & Automation",
    category: "Automation",
    description:
      "Streamline your business processes and eliminate data silos with seamless integrations and powerful automation workflows. We connect your tools and platforms to create unified, efficient operations.\n\nFrom simple point-to-point integrations to complex enterprise automation, we design solutions that save time, reduce errors, and unlock new capabilities.",
    features: [
      {
        title: "System Integration",
        description:
          "Connecting disparate tools and platforms for seamless data flow",
      },
      {
        title: "Workflow Automation",
        description: "Automating repetitive tasks to boost productivity",
      },
      {
        title: "API Development",
        description: "Building custom APIs for flexible integration options",
      },
      {
        title: "Data Synchronization",
        description: "Keeping information consistent across all systems",
      },
      {
        title: "Process Orchestration",
        description: "Coordinating complex multi-step business processes",
      },
      {
        title: "Integration Monitoring",
        description: "Ensuring reliability and quick issue resolution",
      },
    ],
  },
  {
    slug: "it-consulting-strategy",
    title: "IT Consulting & Strategy",
    category: "Strategy",
    description:
      "Make informed technology decisions that align with your business goals. Our IT consulting services help organizations navigate the complex technology landscape, optimize their IT investments, and build resilient digital infrastructure.\n\nFrom technology assessments to digital roadmaps, we provide strategic guidance that drives business value.",
    features: [
      {
        title: "Technology Assessment",
        description: "Evaluating your current IT landscape and capabilities",
      },
      {
        title: "Digital Roadmap Development",
        description:
          "Creating actionable plans for technology transformation",
      },
      {
        title: "Vendor Selection & Management",
        description: "Identifying and managing the right technology partners",
      },
      {
        title: "IT Architecture Design",
        description: "Building scalable, secure technology foundations",
      },
      {
        title: "Cloud Strategy",
        description: "Planning and executing cloud migration and optimization",
      },
    ],
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    category: "Web Development",
    description:
      "Create a powerful online presence with our custom web design and development services. We build responsive, high-performance websites that showcase your brand, engage visitors, and convert leads.\n\nFrom corporate websites to complex web applications, we deliver digital experiences that drive business results.",
    features: [
      {
        title: "Responsive Design",
        description: "Websites that look great on all devices",
      },
      {
        title: "User Experience (UX) Optimization",
        description: "Intuitive navigation and seamless user journeys",
      },
      {
        title: "Content Management System Integration",
        description: "Easy-to-use platforms for content updates",
      },
      {
        title: "E-commerce Functionality",
        description: "Online stores that drive sales and conversions",
      },
      {
        title: "SEO-Friendly Architecture",
        description: "Built for search engine visibility from the ground up",
      },
      {
        title: "Website Security & Maintenance",
        description: "Ongoing protection and updates for your digital assets",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Development",
    description:
      "Transform your business operations with tailored software solutions designed to address your unique challenges. We build custom applications that automate processes, improve efficiency, and create competitive advantage.\n\nFrom internal tools to customer-facing platforms, we deliver software that fits your exact requirements.",
    features: [
      {
        title: "Requirements Analysis",
        description:
          "Deep understanding of your business needs and objectives",
      },
      {
        title: "Custom Application Development",
        description: "Bespoke software built to your specifications",
      },
      {
        title: "Legacy System Modernization",
        description: "Updating outdated systems for improved performance",
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing to ensure reliability and performance",
      },
      {
        title: "Deployment & Training",
        description: "Smooth rollout and user adoption support",
      },
      {
        title: "Ongoing Support & Enhancement",
        description: "Continuous improvement based on user feedback",
      },
    ],
  },
  {
    slug: "branding-corporate-identity",
    title: "Branding & Corporate Identity",
    category: "Digital Marketing",
    description:
      "Create a compelling brand identity that resonates with your target audience and sets you apart from competitors. We develop cohesive visual languages and messaging strategies that build recognition and trust.\n\nFrom startups defining their identity to established companies refreshing their brand, we craft identities that capture your essence.",
    features: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Defining your unique place in the market",
      },
      {
        title: "Logo Design & Visual Identity",
        description: "Creating memorable visual elements that represent your brand",
      },
      {
        title: "Brand Guidelines & Style Guides",
        description: "Ensuring consistency across all touchpoints",
      },
      {
        title: "Voice & Messaging Development",
        description: "Crafting the words that communicate your brand",
      },
      {
        title: "Brand Collateral Design",
        description: "Business cards, presentations, and marketing materials",
      },
      {
        title: "Brand Experience Consulting",
        description: "Aligning every customer interaction with your brand promise",
      },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    category: "Digital Marketing",
    description:
      "Tell your brand story and establish thought leadership with compelling, strategic content. We create content that educates, engages, and converts your target audience.\n\nFrom blog posts and whitepapers to video content and social media, we develop comprehensive content strategies that drive results.",
    features: [
      {
        title: "Content Strategy Development",
        description: "Planning content that aligns with business objectives",
      },
      {
        title: "Blog & Article Writing",
        description: "Engaging written content that attracts and retains audiences",
      },
      {
        title: "Video Content Production",
        description: "Visual storytelling that captures attention",
      },
      {
        title: "Whitepaper & E-book Creation",
        description: "In-depth content that establishes expertise",
      },
      {
        title: "Content Distribution",
        description: "Getting your content in front of the right audiences",
      },
      {
        title: "Performance Analytics",
        description: "Measuring and optimizing content effectiveness",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Digital Marketing",
    description:
      "Build a strong brand presence and engage your audience across all major social platforms. We develop and execute social media strategies that increase visibility, drive engagement, and generate leads.\n\nFrom organic content to paid campaigns, we help you connect with your audience where they spend their time.",
    features: [
      {
        title: "Social Media Strategy",
        description: "Comprehensive plans tailored to your goals and audience",
      },
      {
        title: "Content Creation & Curation",
        description: "Engaging posts that resonate with your followers",
      },
      {
        title: "Community Management",
        description: "Building and nurturing your online community",
      },
      {
        title: "Paid Social Campaigns",
        description: "Targeted advertising to reach new audiences",
      },
      {
        title: "Influencer Partnerships",
        description: "Collaborating with relevant voices in your industry",
      },
      {
        title: "Analytics & Reporting",
        description: "Data-driven insights to optimize performance",
      },
    ],
  },
  {
    slug: "pay-per-click-advertising",
    title: "Pay-Per-Click Advertising (PPC)",
    category: "Digital Marketing",
    description:
      "Maximize your ROI with targeted PPC campaigns across Google, Bing, and social media platforms. We create and manage advertising campaigns that drive qualified traffic and conversions.\n\nFrom keyword research to ad creative and landing page optimization, we handle every aspect of your paid advertising strategy.",
    features: [
      {
        title: "Campaign Strategy & Setup",
        description: "Building campaigns aligned with your business objectives",
      },
      {
        title: "Keyword Research & Selection",
        description: "Identifying high-value search terms for your industry",
      },
      {
        title: "Ad Creative Development",
        description: "Compelling ads that drive clicks and conversions",
      },
      {
        title: "Landing Page Optimization",
        description: "Maximizing conversion rates from ad traffic",
      },
      {
        title: "Bid Management & Optimization",
        description: "Efficient budget allocation for maximum ROI",
      },
      {
        title: "Performance Tracking & Reporting",
        description: "Transparent insights into campaign results",
      },
    ],
  },
  {
    slug: "search-engine-optimization-seo",
    title: "Search Engine Optimization (SEO)",
    category: "Digital Marketing",
    description:
      "Boost your online visibility and climb search engine rankings with data-driven SEO strategies. We help businesses attract organic traffic through comprehensive optimization of their digital presence.\n\nFrom technical SEO to content optimization and link building, we implement proven strategies that deliver sustainable results.",
    features: [
      {
        title: "SEO Audit & Analysis",
        description: "Comprehensive assessment of your current SEO performance",
      },
      {
        title: "Keyword Strategy",
        description: "Identifying and targeting valuable search opportunities",
      },
      {
        title: "On-Page Optimization",
        description: "Optimizing content, meta tags, and site structure",
      },
      {
        title: "Technical SEO",
        description: "Ensuring search engines can crawl and index your site",
      },
      {
        title: "Link Building",
        description: "Building authority through quality backlinks",
      },
      {
        title: "Local SEO",
        description: "Optimizing for local search and Google Business Profile",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
