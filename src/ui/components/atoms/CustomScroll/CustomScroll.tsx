"use client";

import dynamic from "next/dynamic";

import { cn } from "@utils";

const Scrollbars = dynamic(
  () =>
    import("react-custom-scrollbars").then((mod) => ({
      default: mod.Scrollbars,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-full overflow-auto"></div>,
  }
);

interface CustomScrollProps {
  children: React.ReactNode;
}

export const CustomScroll = ({ children }: CustomScrollProps) => {
  return (
    <Scrollbars
      style={{ width: "100%", height: "100%" }}
      className="grow"
      autoHide
      height={"100%"}
      renderTrackHorizontal={(props) => (
        <div
          {...props}
          className={cn(
            "bottom-[2px] left-[6px] w-[calc(100%-16px)] bg-transparent h-[2px]! before:content-[''] before:absolute before:left-0 before:translate-y-[50%] before:w-full before:rounded-[2px] before:h-[2px] before:bg-transparent"
          )}
        />
      )}
      renderThumbHorizontal={(props) => (
        <div
          {...props}
          className="bg-main-yellow h-[2px]! rounded-[2px] cursor-pointer translate-y-[50%]"
        />
      )}
      renderTrackVertical={(props) => (
        <div
          {...props}
          className={cn(
            "top-[4px] right-[20px] w-[2px]! bg-transparent h-[calc(100%-16px)] before:content-[''] before:absolute before:top-[1px] before:left-[50%] before:w-[2px] before:rounded-[2px] before:h-[calc(100%-2px)] before:bg-gray"
          )}
        />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          className="bg-main-yellow w-[2px]! rounded-[2px] cursor-pointer translate-x-[50%]"
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};
