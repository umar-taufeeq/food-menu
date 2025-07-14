import React from 'react'

const Home = () => {
  return (
 <div className="bg-gray-50 text-gray-800 font-sans p-6 md:p-10 space-y-6  mx-auto mt-10">
      {/* Hero Section */}
      <section className="bg-orange-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Delicious Recipes</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Explore curated recipes for every occasion — from quick bites to indulgent feasts.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300">
          Browse Recipes
        </button>
      </section>

      {/* Featured Recipes */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Recipes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow hover:shadow-md transition">
              <div className="h-48 w-full bg-gray-200 rounded-t-xl animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className="bg-orange-200 text-orange-900 px-4 py-2 rounded-full animate-pulse"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Cook?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Sign up to save your favorite recipes and discover new ones daily!
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-100 transition">
          Get Started
        </button>
      </section>
    </div>
  )
}

export default Home