"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

const Activity3Page = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const reset = () => {
    setFirstNumber(0);
    setSecondNumber(0);
  };

  return (
    <article className="w-fit bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 overflow-hidden p-8 flex justify-center items-center flex-col">
      <div className="relative w-[400px] space-y-8">
        <div className="w-full space-y-1">
          <label className="text-gray-400 font-medium">First number</label>
          <input
            type="number"
            className="w-full bg-gray-700/50 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setFirstNumber(Number(e.target.value))}
            value={firstNumber || ""}
          />
        </div>
        <div className="w-full space-y-1">
          <label className="text-gray-400 font-medium">Second number</label>
          <input
            type="number"
            className="w-full bg-gray-700/50 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setSecondNumber(Number(e.target.value))}
            value={secondNumber || ""}
          />
        </div>
        {firstNumber !== 0 && secondNumber !== 0 && (
          <div className="rounded-lg flex items-center justify-between p-4 py-0">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-base text-gray-400">Sum:</span>
              <span className="text-blue-500 font-bold text-xl">
                {firstNumber + secondNumber}
              </span>
            </div>
            <button
              onClick={reset}
              className="bg-gray-700/50 hover:bg-gray-700/70 p-2 rounded-lg transition flex items-center"
            >
              <RotateCcw className="text-gray-300 mr-2" size={16} />
              <span className="text-gray-300">Reset</span>
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Activity3Page;
