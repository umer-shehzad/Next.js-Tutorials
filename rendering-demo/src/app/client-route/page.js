"use client";

import { useTheme } from "@/components/theme-provider";

export default function ClientRoute() {

    const theme = useTheme();
    console.log("client route");

    return (
        <>
            <h1
            style={{ color:  theme.colors.primary }}
            >
                Client Route Page
            </h1>
        </>
    )
}