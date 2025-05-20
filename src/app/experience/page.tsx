// src/app/experience/page.tsx
import type { Metadata } from 'next';
import ExperienceClientPage from './ExperienceClientPage'; // Import the new client component

export const metadata: Metadata = {
  title: 'Experience | Marco Sukhatme',
  description: 'Details of Marco Sukhatme\'s work experience, internships, ventures, and leadership roles.',
};

export default function ExperiencePage() {
  return <ExperienceClientPage />;
}
