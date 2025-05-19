// src/app/experience/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export const metadata: Metadata = {
  title: 'Experience | Marco Sukhatme',
  description: 'Details of Marco Sukhatme\'s work experience, internships, ventures, and leadership roles.',
};

// Simple SVG Icon for external link
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 inline-block group-hover:text-uchicago-maroon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const experienceData = [
  {
    id: 'vantai',
    company: 'VantAI',
    role: 'Target Strategy Intern',
    date: 'Incoming, Summer 2025 (Second Half)',
    location: 'New York, NY',
    description: 'AI-driven drug discovery startup with an in silico platform to design protein proximity modulators. VantAI launched Neo-1, the first AI model to unify de novo molecular generation and atomic-level structure prediction.',
    responsibilities: [
      'Leverage machine learning to conduct sentiment analysis aimed at prioritizing high-growth therapeutic areas over the next five years.',
      'Research to be used by VantAI when determining which drugs to consider for development, both for its internal pipeline and its partnerships with large pharmaceutical conglomerates (e.g., Bristol Myers Squibb, Janssen, Blueprint Medicines).',
    ],
    logoSrc: '/images/vantai_logo.jpeg',
  },
  {
    id: 'scholdings',
    company: 'SC Holdings',
    role: 'Private Equity Summer Analyst',
    date: 'Incoming, Summer 2025 (First Half)',
    location: 'New York, NY',
    description: 'A $600+ MM private equity fund primarily focused on consumer, sports & entertainment, and hospitality brands, recently transitioning to investing in business services. Notable portfolio companies include AG1, The SpringHill Company, and NTWRK (which acquired Complex).',
    responsibilities: [
      'Primarily helping with sourcing and due diligence.',
      'Performing LBO analysis and DCF valuations.',
    ],
    logoSrc: '/images/sc_logo.jpeg',
  },
  {
    id: 'clinalpha',
    company: 'ClinAlpha Capital',
    role: 'Founder & Portfolio Manager',
    date: 'April 2025 – Present',
    location: 'Chicago, IL',
    description: 'A personal project with the aspiration to build into a hedge fund, focusing on generating alpha for biotechnology equities.',
    responsibilities: [
      'Utilizing sentiment analysis, machine learning, and artificial intelligence with public clinical trial and news data as primary drivers.',
    ],
    website: 'https://clinalphacapital.com',
    logoSrc: '/images/clinalpha_logo.png',
  },
  {
    id: 'gotchu',
    company: 'Gotchu',
    role: 'Software Development Intern',
    date: 'December 2024 – February 2025',
    location: 'Chicago, IL',
    description: 'A College New Venture Challenge (CNVC) 2025 food delivery startup committed to transforming food access, including secure-access locations.',
    responsibilities: [
      'Developed core features in React Native and TypeScript.',
      'Responded to application bugs and collaborated on Freestyle Cloud integration for seamless data persistence.',
    ],
    logoSrc: '/images/gotchu_logo.png',
  },
  {
    id: 'tasku',
    company: 'TaskU',
    role: 'Co-Founder & Chief Technology Officer',
    date: 'March 2024 – December 2024',
    location: 'Chicago, IL',
    description: 'Pivoted from "CourseNav" to a platform for UChicago students to pay each other for college-specific tasks (e.g., laundry, dining hall sign-ins).',
    responsibilities: [
      'Developed the platform via Make (formerly Integromat) with Slack integration.',
      'Launched beta in October 2024, onboarding 25+ taskers and reaching over 50% of the student body.',
      'Applied to CNVC for the Winter 2025 class.',
    ],
    logoSrc: '/images/tasku_logo.png',
  },
  {
    id: 'orienta',
    company: 'Orienta Beach Club',
    role: 'Supervisor (Previously Head Beach Attendant, Beach Attendant)',
    date: 'May – September, 2023 & 2024 (Part-time in 2024)',
    location: 'Mamaroneck, NY',
    description: 'Local beach club providing summer employment and professional development.',
    responsibilities: [
      'Promoted twice within two months from Beach Attendant to Supervisor.',
      'Oversaw 80+ employees, including beach attendants and lifeguards.',
      'Responsible for pool and beach safety, pool maintenance, weekly schedules, rotations, and overall team organization via GroupMe.',
      'Cut operational costs for the club by nearly 20% through efficient scheduling.',
      'Gained valuable leadership and professional development skills.',
    ],
    logoSrc: '/images/orienta_logo.jpeg',
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-10">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-uchicago-maroon">
          Work Experience
        </h1>
        <p className="text-lg text-uchicago-greystone mt-2 font-sans max-w-2xl mx-auto">
          My professional journey, including internships, entrepreneurial ventures, and leadership roles.
        </p>
      </header>

      <section className="max-w-4xl mx-auto space-y-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="bg-uchicago-off-black p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col md:flex-row items-start gap-6">
            {/* Logo Section */}
            {exp.logoSrc && (
              <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-md overflow-hidden shadow-md bg-white"> {/* Added bg-white for non-transparent logos */}
                <Image
                  src={exp.logoSrc}
                  alt={`${exp.company} logo`}
                  fill
                  sizes="(max-width: 768px) 96px, 112px" // Helps Next.js optimize image loading
                  className="object-contain p-1" // p-1 for a little padding if logos are tight to edges
                />
              </div>
            )}

            {/* Details Section */}
            <div className="flex-grow">
              <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-uchicago-maroon mb-1">
                {exp.company}
              </h2>
              <p className="text-lg font-medium font-sans text-uchicago-light-greystone mb-1">{exp.role}</p>
              <div className="flex flex-wrap text-sm text-uchicago-greystone mb-3">
                <span>{exp.date}</span>
                <span className="mx-2 hidden sm:inline">|</span>
                <span className="w-full sm:w-auto mt-1 sm:mt-0">{exp.location}</span>
              </div>

              <p className="text-uchicago-light-greystone/80 font-sans text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <h4 className="text-md font-semibold text-uchicago-light-greystone mb-2 mt-3">Key Responsibilities & Achievements:</h4>
              <ul className="list-disc list-inside text-uchicago-light-greystone/80 font-sans space-y-1.5 text-sm leading-relaxed">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {exp.website && (
                <div className="mt-4">
                  <Link href={exp.website} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-sans text-uchicago-maroon hover:underline group"
                  >
                    Visit Website <ExternalLinkIcon />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
