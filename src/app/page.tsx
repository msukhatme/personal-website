import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Marco Sukhatme',
  description: "Marco Sukhatme's personal portfolio website. Quantitative Finance & Machine Learning.",
};

export default function HomePage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto my-8 md:my-12 px-6 sm:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16">
        {/* Headshot (directly on campus background) */}
        <div className="md:flex-shrink-0 order-1 md:order-1">
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-uchicago-maroon hover:scale-105 transition-transform duration-300 ease-in-out group">
            <Image
              src="/images/headshot.jpeg"
              alt="Marco Sukhatme"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:flex-grow order-2 md:order-2 bg-uchicago-off-black/85 backdrop-blur-md rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 text-center md:text-left">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-uchicago-light-greystone mb-3">
            Marco Sukhatme
          </h1>
          <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl text-uchicago-maroon mb-6 font-semibold text-outline-light-greystone-thin">
            Quantitative Finance & Machine Learning
          </h2>
          <p className="font-sans text-base sm:text-lg text-uchicago-light-greystone leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
            Sophomore at the University of Chicago pursuing a B.A. in Statistics and a B.S. in Computer Science with a specialization in Machine Learning. My interests primarily align in the fields of quantitative finance and machine learning, and I’m passionate about entrepreneurship that brings these disciplines together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/projects">
              <button className="w-full sm:w-auto font-sans bg-uchicago-maroon text-white font-semibold py-3 px-8 rounded-lg border-2 border-transparent hover:bg-opacity-80 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-uchicago-maroon focus:ring-opacity-50">
                View Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto font-sans bg-transparent border-2 border-uchicago-maroon text-uchicago-maroon font-semibold py-3 px-8 rounded-lg hover:bg-uchicago-maroon hover:text-white transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-uchicago-maroon focus:ring-opacity-50">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
