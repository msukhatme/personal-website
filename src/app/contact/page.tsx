// src/app/contact/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Marco Sukhatme',
  description: 'Get in touch with Marco Sukhatme. Contact information for email and professional networks.',
}

// Example icons (can be moved to separate components later)
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-3 flex-shrink-0">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-3 flex-shrink-0">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function ContactPage() {
  const email = "msukhatme@uchicago.edu";
  const linkedInUrl = "https://linkedin.com/in/marco-sukhatme";
  const githubUrl = "https://github.com/msukhatme";

  return (
    // This div will grow to fill the space within <main> from layout.tsx
    // and then center its own children (header and section).
    // Added py-8 for some padding, adjust as needed.
    <div className="flex-grow flex flex-col items-center justify-center py-8 md:py-12">
      <header className="mb-10 sm:mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-uchicago-maroon text-outline-light-greystone-thin">
          Get In Touch
        </h1>
        <p className="text-lg text-uchicago-greystone mt-3 font-sans max-w-lg md:max-w-xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something exciting.
        </p>
      </header>

      <section className="max-w-md w-full bg-uchicago-off-black p-6 sm:p-8 rounded-lg shadow-2xl">
        <div className="space-y-5 sm:space-y-6">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center p-4 bg-uchicago-dark-gray rounded-lg hover:bg-uchicago-maroon/10 transition-all duration-300 group border border-transparent hover:border-uchicago-maroon/50"
          >
            <MailIcon />
            <span className="font-sans text-uchicago-light-greystone group-hover:text-uchicago-maroon transition-colors duration-300 break-all">{email}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-uchicago-dark-gray rounded-lg hover:bg-uchicago-maroon/10 transition-all duration-300 group border border-transparent hover:border-uchicago-maroon/50"
          >
            <LinkedInIcon />
            <span className="font-sans text-uchicago-light-greystone group-hover:text-uchicago-maroon transition-colors duration-300">LinkedIn Profile</span>
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-uchicago-dark-gray rounded-lg hover:bg-uchicago-maroon/10 transition-all duration-300 group border border-transparent hover:border-uchicago-maroon/50"
          >
            <GitHubIcon />
            <span className="font-sans text-uchicago-light-greystone group-hover:text-uchicago-maroon transition-colors duration-300">GitHub Profile</span>
          </a>
        </div>
      </section>
    </div>
  );
}
