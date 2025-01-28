"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="w-screen h-screen font-[--font-geist-sans] relative inset-0 flex flex-col justify-center items-center">
      <Header />

      <div className="flex flex-row justify-center gap-10 mt-10">
        <div className="flex flex-col items-center text-gray-900">
          <div className="w-24 h-24 rounded-3xl mb-4 bg-gray-900"></div>
          <h3 className="text-lg font-bold">Herman</h3>
          <p className="text-sm">Creator</p>
          <a href="https://github.com/hermanerku" className="text-gray-600 hover:text-gray-700">GitHub</a>
          <a href="#herman" className="text-gray-600 hover:text-gray-700">More Info & Portfolio</a>
        </div>

        <div className="flex flex-col items-center text-gray-900">
          <div className="w-24 h-24 rounded-3xl mb-4 bg-gray-900"></div>
          <h3 className="text-lg font-bold">Lucas</h3>
          <p className="text-sm">Creator</p>
          <a href="https://github.com/lhagfoss" className="text-gray-600 hover:text-gray-700">GitHub</a>
          <a href="#lucas" className="text-gray-600 hover:text-gray-700">More Info & Portfolio</a>
        </div>

        <div className="flex flex-col items-center text-gray-900">
          <div className="w-24 h-24 rounded-3xl mb-4 bg-gray-900"></div>
          <h3 className="text-lg font-bold">Odin</h3>
          <p className="text-sm">Creator</p>
          <a href="https://github.com/odin" className="text-gray-600 hover:text-gray-700">GitHub</a>
          <a href="#odin" className="text-gray-600 hover:text-gray-700">More Info & Portfolio</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};