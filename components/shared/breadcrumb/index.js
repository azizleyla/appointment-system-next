import { Breadcrumbs, Link } from '@mui/material'
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'

const Breadcrumb = () => {

    const pathname = usePathname();
    const pathnameArray = useMemo(() => {
        return pathname?.split('/').filter(Boolean);
    }, [pathname]);

    return (
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
                    href={path}
                >
                    {path}
                </Link>
            ))}

        </Breadcrumbs>
    )
}

export default Breadcrumb