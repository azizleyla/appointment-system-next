import React from "react";
import Sidebar from "./sidebar";
import { Main } from "next/document";
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/base";
import Topbar from "./topbar";

const Layout = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = React.useState(true);

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
        <Box sx={{ height: "100vh" }}>
            <Sidebar
                setIsOpenSidebar={setIsOpenSidebar}
                isOpenSidebar={isOpenSidebar}
                toggleDrawer={handleToggle}
            />
            <main className={`${isOpenSidebar ? "mainLeft" : ''}`}>
                <Topbar
                    toggleDrawer={handleToggle}
                    setIsOpenSidebar={setIsOpenSidebar}
                    isOpenSidebar={isOpenSidebar}
                />
                {children}
            </main>
        </Box>
    );
};

export default Layout;
