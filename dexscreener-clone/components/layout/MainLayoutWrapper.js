'use client'

import React, { useState } from "react";
import MainLayout from "./MainLayout";
import SearchModal from "../modals/SearchModal/index";

const MainLayoutWrapper = ({ children }) => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      <MainLayout openSearchModal={() => setSearchModalOpen(true)}>
        {children}
      </MainLayout>
      
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};

export default MainLayoutWrapper;
