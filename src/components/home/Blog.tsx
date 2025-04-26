import React from 'react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover cooking tips, recipe ideas, and the latest updates from the ChefAI team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-orange-500 text-sm font-medium">Cooking Tips</span>
              <h3 className="font-bold text-xl mt-2 mb-3">10 Essential Kitchen Hacks Every Cook Should Know</h3>
              <p className="text-gray-600 text-sm mb-4">
                Transform your cooking game with these simple but effective kitchen tricks that save time and enhance flavor.
              </p>
              <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <img 
              src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-orange-500 text-sm font-medium">Recipe Ideas</span>
              <h3 className="font-bold text-xl mt-2 mb-3">5 Quick and Healthy Weeknight Dinner Ideas</h3>
              <p className="text-gray-600 text-sm mb-4">
                Delicious meals you can prepare in under 30 minutes, perfect for busy professionals and families.
              </p>
              <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <img 
              src="https://images.pexels.com/photos/8969253/pexels-photo-8969253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-orange-500 text-sm font-medium">AI & Cooking</span>
              <h3 className="font-bold text-xl mt-2 mb-3">How AI is Revolutionizing Home Cooking</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore how artificial intelligence is making cooking more accessible and enjoyable for everyone.
              </p>
              <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;