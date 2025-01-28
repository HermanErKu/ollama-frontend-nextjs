"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

export default function Home() {

  return (
    <div className="w-screen h-screen font-[--font-geist-sans] relative inset-0 flex flex-col justify-center items-center">
      <Header />

      <Chat />

      <Footer />
    </div>
  );
};