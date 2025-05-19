import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    // Changed class here: removed min-h-calc, added flex-grow and flex-col
    <div className="flex-grow flex flex-col items-center justify-center">
      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto py-12 px-4"> {/* py-12 here provides padding for the hero content itself */}
        {/* Left Side: Headshot */}
        <div className="w-full md:w-2/5 flex justify-center mb-10 md:mb-0 md:mr-10 lg:mr-16">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-uchicago-maroon hover:scale-105 transition-transform duration-300 ease-in-out group">
            <Image
              src="/images/headshot.jpeg"
              alt="Marco Sukhatme"
              fill
              priority
              className="object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Right Side: Intro Text */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-uchicago-light-greystone mb-3">
            Marco Sukhatme
          </h1>
          <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl text-uchicago-maroon mb-6 font-semibold">
            Quantitative Finance & Machine Learning
          </h2>
          <p className="font-sans text-base sm:text-lg text-uchicago-light-greystone leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
            Sophomore at the University of Chicago pursuing a B.A. in Statistics and a B.S. in Computer Science with a specialization in Machine Learning. My interests primarily align in the fields of quantitative finance and machine learning, and I’m passionate about entrepreneurship that brings these disciplines together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/projects">
              <button className="w-full sm:w-auto font-sans bg-uchicago-maroon text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-uchicago-maroon focus:ring-opacity-50">
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
      </section>
    </div>
  );
}
