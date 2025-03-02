import React, { useState } from "react";

const TimeFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Last 24 hours");

  const options = ["Last 24 hours", "Last 7 days", "Last 30 days"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center bg-dex-blue rounded-lg px-4 py-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-48 bg-dex-bg-tertiary rounded-lg shadow-lg z-20">
          {["Last 24 hours", "Last 7 days", "Last 30 days"].map((option) => (
            <button
              key={option}
              className="block w-full text-left px-4 py-2 hover:bg-dex-bg-highlight first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeFilter;
