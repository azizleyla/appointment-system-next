import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnameArray = useMemo(() => {
    return pathname?.split("/").filter(Boolean);
  }, [pathname]);

  return (
    <Breadcrumbs
      sx={{ marginBottom: "20px" }}
      separator="›"
      aria-label="breadcrumb"
    >
      <Link href="/">
        Dashboard
      </Link>
      {pathnameArray.map((path) => (
        <Link
          style={{ textTransform: "capitalize", color: "#396cf0" }}
          key="2"
          href={`/${path}`}
        >
          {path}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
