"use client";
import { useNavigationStore } from "@/store";
import { cn } from "@utils";
import { AtomImage } from "@atoms";

export const NavigationPDADash = () => {
  const { isDash, dashStyles } = useNavigationStore();

  return (
    <div
      className={cn(
        "relative transition-opacity ease-out duration-300 select-none pointer-events-none",
        isDash ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "absolute bottom-[0] h-[.15rem] bg-custom-gradient transition-all ease-out duration-300 flex justify-center items-end"
        )}
        style={dashStyles.underline}
      >
        <AtomImage
          src="/layoutPDA/line_dot.png"
          alt="dot"
          variant="line_dot"
          className={cn(dashStyles.underline.width)}
        />
      </div>
      <div
        className="absolute bottom-[.15rem] h-[.3rem] bg-custom-gradient_second transition-all ease-out duration-300 flex justify-center items-end"
        style={dashStyles.shortline}
      >
        <AtomImage
          src="/layoutPDA/line_dot_small.png"
          alt="dot"
          variant="line_dot_small"
          className={cn(dashStyles.shortline.width)}
        />
      </div>
    </div>
  );
};
