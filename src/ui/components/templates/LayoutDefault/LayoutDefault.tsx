import {
  calibri,
  stalker,
  roboto,
  roboto_condensed,
  rethink_sans,
} from "@fonts";
import { cn } from "@utils";

import "@styles/globals.scss";

export const LayoutDefault = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" data-scroll-behavior={"smooth"}>
      <body
        className={cn(
          calibri.variable,
          stalker.variable,
          roboto_condensed.variable,
          roboto.variable,
          rethink_sans.variable,
          "antialiased bg-main-black text-main-white relative w-[100dvw] h-[100dvh] max-w-[100%] max-h-[100%] overflow-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
};
