// src/app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Marco Sukhatme',
  description: 'Learn more about Marco Sukhatme, his background, education, skills, and interests in quantitative finance and machine learning.',
}

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-uchicago-maroon/20 text-uchicago-light-greystone font-medium text-sm px-3 py-1 rounded-full mr-2 mb-2 border border-uchicago-maroon/50 hover:bg-uchicago-maroon/30 transition-colors duration-200">
    {children}
  </span>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-semibold font-serif text-uchicago-light-greystone mb-6 border-b-2 border-uchicago-maroon pb-3">
      {title}
    </h2>
    <div className="font-sans text-uchicago-light-greystone/90 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);


export default function AboutPage() {
  const education = {
    university: {
      name: "The University of Chicago",
      location: "Chicago, IL",
      degrees: "B.A. Statistics | B.S. Computer Science",
      specialization: "Specialization in Machine Learning",
      graduation: "Expected, May 2027",
      statsCourses: [
        "MATH 15200: Calculus II", "PHYS 12200: General Physics II (Electricity and Magnetism)",
        "STAT 22000: Statistical Methods and Applications (R)", "MATH 18300: Mathematical Methods in the Physical Sciences I (Linear Algebra)",
        "MATH 18400: Mathematical Methods in the Physical Sciences II (Multivariable Calculus)",
        "DATA 11800: Introduction to Data Science I (Python, Pandas, and NumPy)",
        "STAT 22400: Applied Regression Analysis"
      ],
      csCourses: [
        "MATH 15200: Calculus II", "PHYS 12200: General Physics II (Electricity and Magnetism)",
        "CMSC 14100: Introduction to Computer Science I (Python I)", "CMSC 14200: Introduction to Computer Science II (Python II)",
        "CMSC 14300: Systems Programming I (C I)", "CMSC 14400: Systems Programming II (C II)", "CMSC 27100: Discrete Mathematics",
        "CMSC 27200: Theory of Algorithms", "DATA 11800: Introduction to Data Science I (Python, Pandas, and NumPy)",
        "CMSC 25300: Mathematical Foundations of Machine Learning"
      ],
      econCourses: ["ECON 10200: Principles of Macroeconomics"],
      financialMarketsProgram: "Selective three-year program focused on building quantitative finance acumen through weekly workshops, personal advising, employer visits, and coursework at the Chicago Booth School of Business."
    },
    highSchool: {
      name: "Mamaroneck High School",
      location: "Mamaroneck, NY",
      diploma: "June 2023",
      sat: "SAT: 1590/1600 (800 Math, 790 EBRW)",
      aps: "11 APs",
      honors: ["National Merit Scholarship Finalist", "U.S. Presidential Scholars Program Nominee", "National Honor Society", "AP Scholar with Distinction"]
    }
  };

  const skills = {
    programming: [
      "Python (PyTorch, TensorFlow, Pandas, NumPy)", "C", "TypeScript", "Java",
      "React Native", "Node.js", "R", "HTML/CSS"
    ],
    finance: [
      "LSEG Workspace (formerly Refinitiv)", "DCF Valuation", "LBO Modeling",
      "Microsoft Office (Word, Excel, PowerPoint)"
    ],
    languages: ["Spanish (intermediate/classroom)", "French (beginner)"]
  };

  const interests = [
    "Basketball (Minnesota Timberwolves)", "Football (Minnesota Vikings)",
    "Mafia Movies", "Poker", "Weightlifting"
  ];

  return (
    <div className="min-h-screen py-10">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-uchicago-maroon text-outline-light-greystone-thin"> {/* Added text outline */}
          About Me
        </h1>
      </header>

      <div className="max-w-4xl mx-auto bg-uchicago-off-black p-6 sm:p-10 rounded-lg shadow-2xl">
        <Section title="Introduction">
          <p>
            Sophomore at the University of Chicago pursuing a B.A. in Statistics and a B.S. in Computer Science with a specialization in Machine Learning. My interests primarily align in the fields of quantitative finance and machine learning, and I’m passionate about entrepreneurship that brings these disciplines together.
          </p>
          <p>
            I’m drawn to roles where I can apply statistical modeling and algorithmic strategy to uncover market opportunities, then leverage AI techniques to build scalable, data-driven products. Some of my experiences include founding ClinAlpha Capital—a sentiment-analysis-powered biotech equity fund—interning in machine learning and private equity roles, co-founding TaskU and driving product development at a food delivery startup, leading the design of algorithmic trading systems in Python and Java, and advancing deep-learning research to optimize medical image diagnostic models.
          </p>
        </Section>

        <Section title="Education">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold font-serif text-uchicago-light-greystone mb-2">{education.university.name}</h3>
            <p className="text-uchicago-greystone text-sm mb-1">{education.university.location}</p>
            <p className="mb-1"><strong className="font-medium text-uchicago-light-greystone/90">Degrees:</strong> {education.university.degrees}</p>
            <p className="mb-1"><strong className="font-medium text-uchicago-light-greystone/90">Specialization:</strong> {education.university.specialization}</p>
            <p className="mb-3"><strong className="font-medium text-uchicago-light-greystone/90">Expected Graduation:</strong> {education.university.graduation}</p>

            <h4 className="text-lg font-semibold text-uchicago-light-greystone mt-4 mb-2">Relevant Coursework:</h4>
            <div className="mb-3">
              <p className="font-medium text-uchicago-light-greystone/80 mb-1">Statistics:</p>
              {education.university.statsCourses.map(course => <Pill key={course}>{course}</Pill>)}
            </div>
            <div className="mb-3">
              <p className="font-medium text-uchicago-light-greystone/80 mb-1">Computer Science:</p>
              {education.university.csCourses.map(course => <Pill key={course}>{course}</Pill>)}
            </div>
             <div className="mb-3">
              <p className="font-medium text-uchicago-light-greystone/80 mb-1">Economics:</p>
              {education.university.econCourses.map(course => <Pill key={course}>{course}</Pill>)}
            </div>

            <h4 className="text-lg font-semibold text-uchicago-light-greystone mt-4 mb-2">Financial Markets Program:</h4>
            <p className="text-uchicago-light-greystone/80">{education.university.financialMarketsProgram}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold font-serif text-uchicago-light-greystone mb-2">{education.highSchool.name}</h3>
            <p className="text-uchicago-greystone text-sm mb-1">{education.highSchool.location} | {education.highSchool.diploma}</p>
            <p className="mb-1">{education.highSchool.sat} | {education.highSchool.aps}</p>
            <p className="font-medium text-uchicago-light-greystone/80 mb-1 mt-2">Selected Honors:</p>
            {education.highSchool.honors.map(honor => <Pill key={honor}>{honor}</Pill>)}
          </div>
        </Section>

        <Section title="Skills">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-uchicago-light-greystone mb-2">Programming:</h3>
            {skills.programming.map(skill => <Pill key={skill}>{skill}</Pill>)}
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-uchicago-light-greystone mb-2">Finance:</h3>
            {skills.finance.map(skill => <Pill key={skill}>{skill}</Pill>)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-uchicago-light-greystone mb-2">Languages:</h3>
            {skills.languages.map(lang => <Pill key={lang}>{lang}</Pill>)}
          </div>
        </Section>

        <Section title="Interests">
          <div>
            {interests.map(interest => <Pill key={interest}>{interest}</Pill>)}
          </div>
        </Section>
      </div>
    </div>
  );
}
