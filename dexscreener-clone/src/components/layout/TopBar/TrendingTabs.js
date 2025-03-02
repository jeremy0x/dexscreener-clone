import React from "react";

const TrendingTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "5m", label: "5M" },
    { id: "1h", label: "1H" },
    { id: "6h", label: "6H" },
    { id: "24h", label: "24H" },
  ];

  return (
    <div className="flex bg-dex-bg-tertiary rounded-lg overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-3 py-2 text-sm ${
            activeTab === tab.id
              ? "bg-dex-blue text-white"
              : "text-dex-text-primary hover:bg-dex-bg-highlight"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TrendingTabs;
