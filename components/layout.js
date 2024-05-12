import React, { createContext, useState } from "react";
import Sidebar from "./sidebar";
import { Main } from "next/document";
import { Box, Grid } from "@mui/material";
import Topbar from "./topbar";

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
                    {children}
                </main>
            </Box>
        </SidebarContext.Provider>

    );
};

export default Layout;
