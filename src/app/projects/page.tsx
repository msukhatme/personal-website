// src/app/projects/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | Marco Sukhatme',
  description: 'Explore Marco Sukhatme\'s projects in quantitative finance, machine learning, software development, and research.',
};

// GitHub Icon SVG
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Pill component for technologies (can be moved to a shared component later)
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-uchicago-dark-gray text-uchicago-light-greystone font-medium text-xs px-2.5 py-1 rounded-full mr-1.5 mb-1.5 border border-uchicago-greystone/50">
    {children}
  </span>
);

const projectsData = [
  {
    id: 'citadel-mathdash',
    title: 'Citadel MathDash Collegiate Quant League',
    date: 'March 2025 – May 2025',
    role: 'Finalist, 4th Nationally',
    location: 'Boston, MA (Remote)',
    description: 'Participated in a 6-week online quant-oriented math competition hosted by Citadel.',
    highlights: [
      'Placed 4th nationally.',
      'Invited to the Finale in Boston.',
    ],
    technologies: ['Quantitative Analysis', 'Mathematics'],
    imagePlaceholder: true, // For a potential competition logo or thematic image
  },
  {
    id: 'uchicago-trading-comp',
    title: 'UChicago Trading Competition',
    date: 'March 2025 – April 2025',
    role: 'Team Captain',
    location: 'Chicago, IL',
    description: 'Led a team in the 2025 UChicago Trading Competition, which consisted of two challenging cases focused on algorithmic trading and portfolio optimization.',
    highlights: [
      'Case 1: Led development of a high-frequency algorithmic trading system in Python, implementing market-making, ETF arbitrage, and speculative strategies while managing risk effectively.',
      'Case 2: Designed and implemented a portfolio optimization solution using quantitative models (including Markowitz mean-variance and risk parity approaches) to allocate assets based on historical intraday data, resulting in consistent risk-adjusted returns and an annualized Sharpe ratio of ~9.0.',
    ],
    technologies: ['Python', 'Algorithmic Trading', 'Quantitative Finance', 'Risk Management', 'Portfolio Optimization'],
    link: 'https://github.com/msukhatme/utc-2025',
    imagePlaceholder: true,
  },
  {
    id: 'sports-betting-algo',
    title: 'Sports Betting Algorithm',
    date: 'September 2022 – June 2023',
    role: 'Creator',
    location: 'Mamaroneck, NY',
    description: 'Collaborated with a non-technical friend to design and build a system to identify and capitalize on inefficiencies in NBA first-basket parlays.',
    highlights: [
      'Identified patterns of players being incorrectly assigned odds based on points per game rather than true first-basket probability.',
      'Built a Java-based parlay calculator to find betting inefficiencies and output optimal combinations.',
      'Automated wager placement via Node.js (restricted usage to test environments for legal compliance).',
      'Backtesting revealed positive returns.',
    ],
    technologies: ['Java', 'Node.js', 'Statistical Analysis', 'Automation'],
    link: 'https://github.com/msukhatme/sports-betting-algorithm',
    imagePlaceholder: true,
  },
  {
    id: 'resnet-research',
    title: 'Research: Using Data Augmentation to Improve ResNet-18 for TB Detection',
    date: 'June 2021 – May 2023',
    role: 'Researcher (Original Science Research Program)',
    location: 'Collaboration with Dr. Parsa Akbari, University of Cambridge (Remote)',
    description: 'Enhanced the ResNet-18 convolutional neural network for tuberculosis detection by applying data augmentations on a public chest X-ray image dataset (T. Rahman et al. 2020).',
    highlights: [
      'Achieved a six-fold improvement in training time and a 43% reduction in F-score error as compared to the control model.',
      'Significantly outperformed human diagnosis accuracy.',
      'Findings documented in a research paper and presented at the Westchester-Rockland Junior Science & Humanities Symposium (Placed 5th in Computational Biology & Bioinformatics).',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'CNN', 'Computer Vision', 'Medical Imaging', 'Data Augmentation'],
    link: 'https://github.com/msukhatme/research-project',
    imagePlaceholder: true,
  },
];


export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-10">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-uchicago-maroon">
          Projects & Research
        </h1>
        <p className="text-lg text-uchicago-greystone mt-2 font-sans max-w-2xl mx-auto">
          A showcase of my technical endeavors, research contributions, and competitive achievements.
        </p>
      </header>

      <section className="max-w-5xl mx-auto space-y-16">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-uchicago-off-black p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            {/* Image Placeholder - Replace with <Image /> component when you have images */}
            {project.imagePlaceholder && (
              <div className="w-full h-64 sm:h-72 md:h-80 bg-uchicago-dark-gray rounded-md flex items-center justify-center text-uchicago-greystone mb-6 shadow-inner">
                <p className="text-lg">Project Image (approx. 800x600)</p>
              </div>
            )}

            <div className="flex flex-col lg:flex-row lg:gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-uchicago-maroon mb-1">
                  {project.title}
                </h2>
                <p className="text-md font-medium font-sans text-uchicago-light-greystone mb-1">{project.role}</p>
                <div className="flex flex-wrap text-sm text-uchicago-greystone mb-4">
                  <span>{project.date}</span>
                  {project.location && (<><span className="mx-2 hidden sm:inline">|</span><span className="w-full sm:w-auto mt-1 sm:mt-0">{project.location}</span></>)}
                </div>
                <p className="text-uchicago-light-greystone/80 font-sans text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="lg:w-1/3 mt-6 lg:mt-0">
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-md font-semibold text-uchicago-light-greystone mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-uchicago-light-greystone/80 font-sans space-y-1.5 text-sm leading-relaxed">
                      {project.highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-md font-semibold text-uchicago-light-greystone mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap">
                      {project.technologies.map(tech => <Pill key={tech}>{tech}</Pill>)}
                    </div>
                  </div>
                )}

                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto mt-2 px-5 py-2.5 bg-uchicago-maroon text-white font-sans font-medium text-sm rounded-lg hover:bg-opacity-80 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-uchicago-maroon focus:ring-opacity-50"
                  >
                    <GitHubIcon /> View on GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
