import { calibri, stalker, roboto, roboto_condensed, rethink } from '@fonts';
import { cn } from "@utils";

import '@styles/globals.scss';

interface LayoutDefaultProps {
    children: React.ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    calibri.variable,
                    stalker.variable,
                    roboto_condensed.variable,
                    roboto.variable,
                    rethink.variable,
                    "antialiased bg-main-black text-main-white relative"
                )}
            >
                {children}
            </body>
        </html>
    );
};
