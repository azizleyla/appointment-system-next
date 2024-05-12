import React, { createContext, useState } from "react";
import Sidebar from "./sidebar";
import { Main } from "next/document";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import Topbar from "./topbar";
import { usePathname } from "next/navigation";

export const SidebarContext = createContext();

const Layout = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true);
    const pathname = usePathname();
    const pathnameArray = pathname.split('/').filter(Boolean); // This will split the string and remove any empty strings from the resulting array

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
                        <Breadcrumbs
                            sx={{ marginBottom: "20px" }}
                            separator="›"
                            aria-label="breadcrumb"
                        >
                            <Link underline="hover" key="1" color="inherit" href="/">
                                Dashboard
                            </Link>
                            {pathnameArray.map((path) => (
                                <Link
                                    sx={{ textTransform: "capitalize", color: "#396cf0" }}
                                    underline="hover"
                                    key="2"
                                    color="inherit"
                                    href="/material-ui/getting-started/installation/"
                                >
                                    {path}
                                </Link>
                            ))}

                        </Breadcrumbs>

                        {children}
                    </Box>
                </main>
            </Box>
        </SidebarContext.Provider>
    );
};

export default Layout;
