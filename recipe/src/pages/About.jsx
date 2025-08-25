import React from "react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Main Content */}
      <main className="flex-grow pt-10">
        <section className="bg-orange-100 py-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Recipe App</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Recipe App is your go-to place for discovering, saving, and creating
            delicious recipes. Whether you are a beginner or a pro in the
            kitchen, we provide a simple and enjoyable way to explore new dishes
            and keep track of your favorites.
          </p>
        </section>

        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-lg">
            We believe cooking should be fun, easy, and inspiring. Our mission
            is to make recipe discovery seamless and help food lovers share and
            explore amazing meals from around the world.
          </p>
        </section>

        <section className="bg-orange-50 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-500">Why Choose Us?</h2>
          <ul className="max-w-xl mx-auto space-y-3 text-lg list-disc text-left">
            <li>Curated recipes for every occasion.</li>
            <li>Easy-to-follow instructions with clear ingredients.</li>
            <li>Save and create your own recipes.</li>
            <li>Discover new recipes daily.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-100 text-gray-800 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-lg font-semibold">Recipe App</h2>
          <p className="text-xs">
            © {new Date().getFullYear()} Recipe App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
