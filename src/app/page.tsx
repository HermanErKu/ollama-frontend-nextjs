"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />

      <Chat />


      <Footer />
    </div>
  );
}
