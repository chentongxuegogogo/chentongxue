import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
      <Link 
        href="/" 
        className="pointer-events-auto flex items-center gap-2 text-gray-500 hover:text-black transition-colors duration-300 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md"
      >
        <ArrowLeft size={16} />
        <span className="text-sm font-medium">Home</span>
      </Link>
    </nav>
  );
};
