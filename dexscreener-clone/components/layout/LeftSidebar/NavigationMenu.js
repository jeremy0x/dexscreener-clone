'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-8">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">
        Navigation
      </h3>
      <nav className="space-y-1">
        <Link
          href="/"
          className={`flex items-center px-4 py-2.5 text-sm rounded transition-colors ${
            pathname === "/"
              ? "bg-dex-bg-highlight text-dex-text-primary"
              : "text-dex-text-secondary hover:bg-dex-bg-highlight hover:text-dex-text-primary"
          }`}
        >
          <span className="mr-3 w-5 text-center">📈</span>
          Trending
        </Link>
        <Link
          href="/pumpfun"
          className={`flex items-center px-4 py-2.5 text-sm rounded transition-colors ${
            pathname === "/pumpfun"
              ? "bg-dex-bg-highlight text-dex-text-primary"
              : "text-dex-text-secondary hover:bg-dex-bg-highlight hover:text-dex-text-primary"
          }`}
        >
          <span className="mr-3 w-5 text-center">🚀</span>
          Pump.fun Tokens
        </Link>
        <Link
          href="/portfolio"
          className={`flex items-center px-4 py-2.5 text-sm rounded transition-colors ${
            pathname === "/portfolio"
              ? "bg-dex-bg-highlight text-dex-text-primary"
              : "text-dex-text-secondary hover:bg-dex-bg-highlight hover:text-dex-text-primary"
          }`}
        >
          <span className="mr-3 w-5 text-center">💼</span>
          Portfolio
        </Link>
      </nav>
    </div>
  );
};

export default NavigationMenu;
