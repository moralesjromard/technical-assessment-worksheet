import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full p-6  bg-gray-800/30 border-b border-white/10">
      <Link
        href="/"
        className="flex items-center gap-2 hover:underline cursor-pointer w-fit"
      >
        <ChevronLeft className="size-5 text-white" />
        <span className="text-sm font-medium">Go back</span>
      </Link>
    </nav>
  );
};
