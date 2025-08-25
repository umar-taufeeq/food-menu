import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
 <div className="bg-gray-50 text-gray-800 font-sans p-6 md:pt-10 space-y-4  mx-auto mt-10 mb-0 pb-0">
      {/* Hero Section */}
      <section className="bg-orange-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Delicious Recipes</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Explore curated recipes for every occasion — from quick bites to indulgent feasts.
        </p>
        <NavLink to="/recipes" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300">
          Browse Recipes
        </NavLink>
      </section>


      {/* Call to Action */}
      <section className="bg-orange-500 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Cook?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          save and create your favorite recipes and discover new ones daily!
        </p>
        <NavLink to="/create" className="bg-white text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-100 transition">
          Get Started
        </NavLink>
      </section>

      <footer className="bg-orange-100  text-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Brand */}
        <h2 className="text-lg font-semibold">Recipe App</h2>

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} Recipe App. All rights reserved.
        </p>
      </div>
    </footer>


    </div>




  )
}

export default Home