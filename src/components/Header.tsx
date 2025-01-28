import Link from "next/link";

const Header = () => {

    return (
        <header className="w-full h-16 bg-gray-800 flex items-center justify-center fixed top-0 left-0">
            <Link href="/" className="text-white text-xl font-bold">TanVGS GPT</Link>
        </header>
    )
}

export default Header;