import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-orange-600 text-white rounded-t-3xl">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try ChefAI for Free,<br />
              No Credit Card Needed, Forever
            </h2>
            <p className="text-white/90 mb-6 max-w-xl">
              Start exploring our AI-powered recipe generator today and discover delicious meals you can make with ingredients you already have at home.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center bg-white text-orange-600 hover:bg-orange-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Start Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="lg:w-1/3 relative">
            <img
              src="https://images.pexels.com/photos/8396536/pexels-photo-8396536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="AI Chef Robot"
              className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
            />
            {/* Robot mascot would be here in actual implementation */}
            <div className="absolute -top-4 -right-4 bg-white text-orange-600 rounded-full p-3 shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;