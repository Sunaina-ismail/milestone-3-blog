import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/skin-care.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-40">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
          Beautiful Skin, Gorgeous Hair
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-serif text-white mb-6 sm:mb-8 px-4 sm:px-6">
          Unlock the secret to glowing skin and healthy hair with our carefully
          crafted skincare and haircare products. Nourish, restore, and reveal
          your natural beauty with every use. From revitalizing serums to
          soothing shampoos, experience the transformative power of self-care
          and let your radiance shine through.
        </p>
        <Link href={"/BlogData"}>
          <button className=" bg-orange-500 font-serif text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-600">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
