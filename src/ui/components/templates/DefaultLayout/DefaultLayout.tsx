"use client";

import { calibri, stalker, roboto, roboto_condensed, rethink } from '@fonts';
import { cn } from "@utils";

import '@styles/globals.scss';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    calibri.variable,
                    stalker.variable,
                    roboto_condensed.variable,
                    roboto.variable,
                    rethink.variable,
                    "antialiased bg-main-black text-primary-main",
                    "flex flex-col w-full"
                )}
            >
                {children}
            </body>
        </html>
    );
};
