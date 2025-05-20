import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities | Marco Sukhatme',
  description: 'Marco Sukhatme\'s extracurricular activities, leadership roles, and involvements at the University of Chicago and beyond.',
};

const activitiesData = [
  {
    id: 'seo',
    organization: 'Sponsors for Educational Opportunity (SEO)',
    role: 'SEO Career, Markets Track',
    date: 'April 2025 – Present',
    location: 'New York, NY (Remote)',
    description: 'A non-profit organization providing educational and career support to young people from underserved communities. The Markets Track spans hedge funds, investment management, research, private banking, quantitative analysis, sales & trading, and wealth management.',
    highlights: [
      'Receive tailored mentorship from industry professionals.',
      'Engage in case studies that simulate live trading scenarios.',
      'Network with top firms through exclusive workshops.',
    ],
  },
  {
    id: 'ucg',
    organization: 'UChicago Credit Group (UCG)',
    role: 'Member',
    date: 'March 2025 – Present',
    location: 'Chicago, IL',
    description: 'UChicago’s premier undergraduate credit-focused investment organization, featuring a quarterly stock pitch competition, a comprehensive credit curriculum, interactive events, and a speaker series.',
    highlights: [
      'Joined as a new member for UCG’s Spring 2025 class with the goal of learning more about the quantitative side of credit, valuation methodologies, and finance in general.',
      'Currently working on a comprehensive investment memo for Charles River Laboratories, a requirement for new members involving a publicly traded company with high-yield credit.',
    ],
  },
  {
    id: 'ja',
    organization: 'Junior Achievement (UChicago Chapter)',
    role: 'Director of Volunteer Placement & Operations Coordinator, Board of Directors',
    date: 'October 2024 – Present',
    location: 'Chicago, IL',
    description: 'A global non-profit youth organization delivering experiential learning programs in financial literacy to underprivileged students. Partnered with firms like JP Morgan, Bank of America, Citi, HSBC, PwC, and Ernst & Young.',
    highlights: [
      'Serve on the Board of Directors for the UChicago chapter as the Director of Volunteer Placement.',
      'Scheduled 1000+ volunteer hours at local Chicago public schools.',
      'Member of the Operations Committee.',
      'Currently independently working on rebuilding the Junior Achievement Chicago internal website.',
    ],
  },
  {
    id: 'algo-group',
    organization: 'Algo Group',
    role: 'Member',
    date: 'October 2023 – Present',
    location: 'Chicago, IL',
    description: 'UChicago’s premier undergraduate software engineering registered student organization (RSO), focusing on developing technical skills in computer science and preparing students for software engineering recruiting.',
    highlights: [
      'Joined as a member of the Fall 2023 class.',
      'Valuable club and network for technical skill development and industry preparation.',
    ],
  }
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen py-10">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-uchicago-maroon text-outline-light-greystone-thin">
          Extracurricular Activities
        </h1>
        <p className="text-lg text-uchicago-greystone mt-2 font-sans max-w-2xl mx-auto">
          My involvements, leadership roles, and contributions beyond academics and work.
        </p>
      </header>

      <section className="max-w-4xl mx-auto space-y-10">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="bg-uchicago-off-black p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-3">
              <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-uchicago-maroon text-outline-light-greystone-thin">
                {activity.organization}
              </h2>
              <p className="text-lg font-medium font-sans text-uchicago-light-greystone mt-1">{activity.role}</p>
              <div className="flex flex-wrap text-sm text-uchicago-greystone mt-1">
                <span>{activity.date}</span>
                <span className="mx-2 hidden sm:inline">|</span>
                <span className="w-full sm:w-auto mt-1 sm:mt-0">{activity.location}</span>
              </div>
            </div>

            <p className="text-uchicago-light-greystone/80 font-sans text-sm leading-relaxed mb-4">
              {activity.description}
            </p>

            {activity.highlights && activity.highlights.length > 0 && (
              <div>
                <h4 className="text-md font-semibold text-uchicago-light-greystone mb-2">Key Highlights & Contributions:</h4>
                <ul className="list-disc list-inside text-uchicago-light-greystone/80 font-sans space-y-1.5 text-sm leading-relaxed">
                  {activity.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
