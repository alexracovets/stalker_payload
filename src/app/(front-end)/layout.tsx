"use client";

import { DefaultLayout } from "@templates";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    );
};