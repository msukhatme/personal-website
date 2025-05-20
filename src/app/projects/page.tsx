import type { Metadata } from 'next';
import ProjectsClientPage from './ProjectsClientPage';

export const metadata: Metadata = {
  title: 'Projects | Marco Sukhatme',
  description: 'Explore Marco Sukhatme\'s projects in quantitative finance, machine learning, software development, and research.',
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
