import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="w-screen h-screen font-[--font-geist-sans] relative inset-0 flex flex-col justify-center items-center">
      <Header />

      <div className="flex flex-col justify-center items-center text-gray-700">
        <h1 className="text-9xl font-bold text-gray-700">TanVGS GPT</h1>
        <p className="text-gray-700">En VELDIG venlig AI-assistent for å hjelpe alle deres behover!</p>

        <Link href="/chat" className="bg-gray-800 text-white px-4 py-2 rounded-md mt-10" prefetch={true}>Start chat</Link>
      </div>

      <Footer />
    </div>
  )
}
