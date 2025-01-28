import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-gray-800 flex items-center justify-center fixed bottom-0">
      <h2 className="text-l text-gray-50">©2025 <Link href="/contact" className="text-gray-600 hover:text-gray-700">2ITElite</Link></h2>
    </footer>
  );
}

export default Footer;