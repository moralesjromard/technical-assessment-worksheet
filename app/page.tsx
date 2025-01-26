import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { activities } from "@/constants";

const HomePage = () => {
  return (
    <main className="h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="bg-gray-800/50 p-5 border-b border-white/10">
          <h1 className="text-2xl font-semibold text-white">
            Technical Worksheet
          </h1>
        </div>

        <ul className="divide-y divide-white/10 max-h-[600px] scrollbar overflow-y-auto">
          {activities.map((activity, index) => (
            <li
              key={index}
              className="hover:bg-white/5 transition-colors duration-200"
            >
              <Link
                href={activity.href}
                className="flex items-center justify-between p-5 group"
              >
                <div>
                  <h2 className="text-base font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
                    {activity.title}
                  </h2>
                  <p className="text-gray-400 mt-1 text-sm">
                    {activity.description}
                  </p>
                </div>
                <div>
                  <ChevronRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all size-5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default HomePage;
