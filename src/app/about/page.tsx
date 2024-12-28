import React from "react";

const About = () => {
  return (
    <div className="bg-white py-20 px-6 rounded-md">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold font-serif text-orange-600 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-base font-serif md:text-lg mb-4">
          Welcome to Glow Giver! We believe that beauty begins with healthy,
          nourished skin and hair. Our mission is to bring you premium skincare
          and haircare solutions that are thoughtfully crafted to rejuvenate,
          restore, and enhance your natural beauty.
        </p>
        <p className="text-gray-600 text-base font-serif md:text-lg">
          With a focus on quality ingredients and sustainable practices, we aim
          to provide products that you can trust. Whether it&apos;s a glowing
          complexion or shiny, luscious locks, we&apos;re here to help you
          achieve your beauty goals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-4">
        <h2 className="text-2xl font-bold font-serif text-orange-600 mb-4 text-center">
          Our Story
        </h2>
        <p className="text-gray-600 text-base font-serif md:text-lg text-center mb-4">
          Our journey began with a simple goal: to make effective skincare and
          haircare accessible to everyone. Inspired by the power of nature and
          backed by science, we created a range of products designed to address
          every skin and hair type and concern.
        </p>
        <p className="text-gray-600 text-base md:text-lg font-serif text-center">
          From small beginnings, we&apos;ve grown into a community that values
          self-care, transparency, and results. Thank you for being a part of
          our story and trusting us with your hair and skin needs.
        </p>
      </div>
    </div>
  );
};

export default About;
