export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    slug: "android-developer",
    title: "Android Developer",
    department: "Development",
    location: "Bangalore",
    type: "Full-time",
    description:
      "We're looking for an experienced Android Developer to join our mobile development team. You'll be responsible for building and maintaining high-quality Android applications for our clients across various industries.",
    responsibilities: [
      "Design, develop, and maintain Android applications",
      "Collaborate with cross-functional teams to define and implement new features",
      "Ensure the performance, quality, and responsiveness of applications",
      "Identify and fix bugs, performance bottlenecks, and other issues",
      "Stay up-to-date with new mobile development trends and technologies",
      "Participate in code reviews and contribute to team best practices",
    ],
    requirements: [
      "3+ years of experience in Android development",
      "Strong knowledge of Kotlin and Java",
      "Experience with Android SDK, Android Studio, and related tools",
      "Familiarity with RESTful APIs and third-party libraries",
      "Understanding of mobile UI/UX principles",
      "Experience with version control systems (Git)",
      "Strong problem-solving skills and attention to detail",
    ],
  },
  {
    slug: "senior-sme-operations",
    title: "Senior SME Operations",
    department: "Operations",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "We're seeking a Senior Subject Matter Expert in Operations to lead process optimization initiatives and provide expertise across our operational functions. This role is critical for driving efficiency and quality across our service delivery.",
    responsibilities: [
      "Serve as the primary subject matter expert for operational processes",
      "Analyze existing workflows and identify improvement opportunities",
      "Develop and implement process optimization strategies",
      "Train and mentor team members on best practices",
      "Collaborate with leadership on strategic operational initiatives",
      "Create documentation and knowledge bases for operational procedures",
    ],
    requirements: [
      "5+ years of experience in operations or process management",
      "Strong analytical and problem-solving abilities",
      "Excellent communication and presentation skills",
      "Experience with process improvement methodologies",
      "Ability to work with cross-functional teams",
      "Leadership experience preferred",
      "Bachelor's degree in Business, Operations, or related field",
    ],
  },
  {
    slug: "process-trainer",
    title: "Process Trainer",
    department: "Training and Quality",
    location: "Kolkata",
    type: "Full-time",
    description:
      "We're looking for a Process Trainer to join our Training and Quality team. You'll be responsible for developing and delivering training programs that ensure our teams operate at the highest level of efficiency and quality.",
    responsibilities: [
      "Design and develop training materials and programs",
      "Conduct training sessions for new hires and existing team members",
      "Assess training effectiveness and make improvements",
      "Collaborate with operations teams to identify training needs",
      "Maintain training documentation and records",
      "Support quality assurance initiatives through training",
    ],
    requirements: [
      "3+ years of experience in training or learning and development",
      "Strong presentation and facilitation skills",
      "Experience creating training materials and curricula",
      "Excellent communication skills in English",
      "Ability to adapt training methods to different learning styles",
      "Experience with e-learning platforms is a plus",
      "Bachelor's degree in relevant field",
    ],
  },
  {
    slug: "operations-manager",
    title: "Operations Manager",
    department: "Operations",
    location: "Kolkata",
    type: "Full-time",
    description:
      "We're seeking an Operations Manager to oversee our operations team and ensure smooth delivery of services to our clients. This role requires strong leadership skills and a track record of driving operational excellence.",
    responsibilities: [
      "Manage day-to-day operations and team performance",
      "Develop and implement operational strategies and procedures",
      "Monitor KPIs and drive continuous improvement",
      "Ensure service level agreements are met",
      "Handle escalations and resolve operational issues",
      "Recruit, train, and develop team members",
      "Report on operational metrics to senior leadership",
    ],
    requirements: [
      "5+ years of experience in operations management",
      "Proven leadership and team management skills",
      "Strong analytical and decision-making abilities",
      "Experience with performance management and KPI tracking",
      "Excellent communication and stakeholder management skills",
      "Ability to work in a fast-paced environment",
      "Bachelor's degree in Business or related field; MBA preferred",
    ],
  },
  {
    slug: "team-leader-operations",
    title: "Team Leader Operations",
    department: "Operations",
    location: "Kolkata",
    type: "Full-time",
    description:
      "We're looking for a Team Leader to guide and mentor our operations team. You'll be responsible for ensuring your team delivers high-quality work while meeting deadlines and performance targets.",
    responsibilities: [
      "Lead and supervise a team of operations associates",
      "Assign tasks and monitor team performance",
      "Provide coaching and feedback to team members",
      "Ensure quality standards are maintained",
      "Handle day-to-day operational issues",
      "Collaborate with management on team goals and strategies",
      "Prepare and present team performance reports",
    ],
    requirements: [
      "3+ years of experience in operations",
      "1+ years of team leadership experience",
      "Strong organizational and time management skills",
      "Ability to motivate and develop team members",
      "Good problem-solving and decision-making skills",
      "Proficiency in MS Office and operational tools",
      "Bachelor's degree preferred",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
