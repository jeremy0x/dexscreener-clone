'use client'

import React, { useState, useEffect } from "react";
import TopBar from "../components/layout/TopBar/index";
import TrendingTable from "../components/trending/TrendingTable/index";
import FiltersModal from "../components/modals/FiltersModal/index";
import { getTrendingTokens } from "../lib/services/api";

const TrendingPage = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  // Add the handler for applying filters
  const handleApplyFilters = (filteredTokens) => {
    setTokens(filteredTokens);
    setIsFiltered(true);
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  const fetchTokens = async () => {
    setLoading(true);
    try {
      console.log("Fetching trending tokens for all chains");
      const data = await getTrendingTokens();
      setTokens(data);
    } catch (error) {
      console.error("Error fetching tokens:", error);
      setTokens([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <TopBar
        chainId={null}
        isFiltered={isFiltered}
        openFiltersModal={() => setFiltersModalOpen(true)}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <TrendingTable
        tokens={tokens}
        loading={loading}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      />

      <FiltersModal
        isOpen={isFiltersModalOpen}
        onClose={() => setFiltersModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default TrendingPage;
