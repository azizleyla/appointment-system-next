import React, { createContext, useState } from "react";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";
import Topbar from "./topbar";
import Breadcrumb from "./shared/breadcrumb";

export const SidebarContext = createContext();

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const handleToggle = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpenSidebar(open);
  };


  return (
    <SidebarContext.Provider
      value={{ isOpenSidebar, setIsOpenSidebar, handleToggle }}
    >
      <Box sx={{ height: "100vh" }}>
        <Sidebar />
        <main className={`${isOpenSidebar ? "mainLeft" : ""}`}>
          <Topbar />
          <Box sx={{ padding: "94px 14px  24px" }}>
            <Breadcrumb />
            {children}
          </Box>
        </main>
      </Box>
    </SidebarContext.Provider>
  );
};

export default Layout;
