"use client";

import { useState } from "react";

import { colors } from "@/constants";

const Activity4Page = () => {
  const [color, setColor] = useState("#3B82F6");
  const [size, setSize] = useState(1);

  const onClick = () => {
    setSize((prevSize) => prevSize + 1);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <button
      style={{
        scale: size,
        backgroundColor: color,
      }}
      className="px-6 py-3 text-whtie rounded-lg shadow-lg transition-all"
      onClick={onClick}
    >
      GROW
    </button>
  );
};
export default Activity4Page;
