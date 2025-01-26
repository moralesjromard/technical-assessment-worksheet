"use client";

import { ChevronDown, ChevronUp, RotateCw } from "lucide-react";
import { useState } from "react";

const Activity2Page = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  const isEvenNumber = (num: number) => {
    return num % 2 === 0 ? "even" : "odd";
  };

  return (
    <article className="w-fit bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 overflow-hidden p-8 flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold">{count}</h1>

      <span className="capitalize text-green-400 font-medium text-sm mt-2">
        {isEvenNumber(count)} Number
      </span>

      <div className="flex justify-center items-center gap-5 mt-6">
        <button
          className="flex p-3 bg-blue-500/20 rounded-xl hover:bg-blue-500/40 transition"
          onClick={increment}
        >
          <ChevronUp className="size-6 mr-2" /> Increment
        </button>
        <button
          className="flex p-3 bg-yellow-500/20 rounded-xl hover:bg-yellow-500/40 transition"
          onClick={reset}
        >
          <RotateCw className="size-6 mr-2" />
          Reset
        </button>
        <button
          className="flex p-3 bg-red-500/20 rounded-xl hover:bg-red-500/40 transition"
          onClick={decrement}
        >
          <ChevronDown className="size-6 mr-2" /> Decrement
        </button>
      </div>
    </article>
  );
};
export default Activity2Page;
