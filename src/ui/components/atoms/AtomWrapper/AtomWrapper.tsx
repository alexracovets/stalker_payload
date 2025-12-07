"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@utils";

const variants = cva("", {
  variants: {
    variant: {
      default: "w-full",
      home_page: "w-full h-full relative",
      home_header: cn(
        "absolute top-0 left-0 z-[1]",
        "flex flex-col justify-center items-center w-[520px] h-full bg-main-black p-[32px] gap-y-[48px]"
      ),
      home_logo_wrapper: cn(
        "flex flex-col justify-center items-center gap-y-[2px]"
      ),
      home_video: cn("w-full h-full object-cover relative"),
      home_navigation: cn(
        "flex flex-col justify-center items-center w-full gap-y-[24px]"
      ),
      home_navigationElement: cn("flex justify-center items-center w-full"),
      pda_layout: cn("grid grid-rows-[auto_1fr_auto] h-full"),
      pda_header: cn("relative border-main-border border-y-[.1rem]"),
      internet_wrapper: cn(
        "w-[17.4rem] flex justify-center items-center gap-x-[.8rem]"
      ),
      internet_signal_wrapper: cn(
        "relative w-[1.4rem] h-[1.4rem] flex justify-center items-end gap-x-[.1rem]"
      ),
      internet_signal: cn(
        "w-[0.25rem] bg-[#A8A3A0] transition-all ease-in-out duration-500 delay-0"
      ),
      timer_wrapper: cn(
        "w-[9.9rem] flex justify-center items-center gap-x-[.8rem]"
      ),
      pda_navigation_wrapper: cn(
        "relative flex justify-center items-center bg-hood-black gap-x-[2.8rem] z-[1]"
      ),
      pda_navigation_link_wrapper: cn("h-full relative"),
      pda_navigation: cn("flex justify-center items-center gap-x-[8rem]"),
      navigation_selection_wrapper: cn(
        "absolute top-0 z-[-1] select-none pointer-events-none"
      ),
      pda_footer: cn(
        "w-full flex justify-start items-center gap-x-[27.8rem] p-[2rem] bg-hood-footer relative"
      ),
      footer_destructive_arrows: cn(
        "flex justify-center items-center gap-x-[12rem]"
      ),
      content_wrapper: cn("grid grid-cols-[auto_1fr] h-full w-full relative"),
      aside_wrapper: cn(
        "w-[52.2rem] max-w-[522px] h-full relative z-[-1] py-[1rem] pl-[.9rem] pr-[.8rem]"
      ),
      main_wrapper: cn("w-full h-full py-[1rem]"),
      content: cn("w-full h-full p-[32px] flex flex-col gap-y-[48px]"),
      content_element: cn("w-full h-full p-[32px] flex flex-col gap-y-[12px]"),
      content_header: cn(
        "grid grid-cols-[1fr_auto] w-full gap-x-[48px]"
      ),
      content_suits_wrapper: cn("grid grid-cols-[auto_1fr] w-full gap-x-[10rem]"),
      content_top_wrapper: cn("flex flex-col w-full gap-y-[12px]"),
      content_top_title: cn("flex flex-col w-full gap-y-[2px]"),
      view_switch: cn(
        "flex items-center justify-center rounded-[4px] overflow-hidden h-fit"
      ),
      category_icon_wrapper: cn("relative w-[56px] h-[56px]"),
      list_grid_wrapper: cn("flex flex-col gap-x-[80px] gap-y-[48px]"),
      list_grid_item: cn("flex flex-col gap-y-[32px] w-full"),
      list_grid_item_showcase: cn("flex flex-wrap gap-x-[80px] gap-y-[32px]"),
      rich_text_wrapper: cn("flex flex-col gap-y-[16px] w-full"),
      resistance_table_wrapper: cn("flex flex-col w-full")
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AtomWrapperProps extends React.ComponentProps<"div"> {
  variant?: VariantProps<typeof variants>["variant"];
  asChild?: boolean;
  style?: React.CSSProperties;
}

export const AtomWrapper = ({
  children,
  variant = "default",
  className,
  asChild = false,
  style,
  ...props
}: AtomWrapperProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cn(variants({ variant, className }))}
      {...props}
      style={style}
    >
      {children}
    </Component>
  );
};
