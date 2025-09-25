"use client";

import { AtomImage } from "@atoms";

export const MainPDABorder = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-[.9rem]">
        <AtomImage
          src="/layoutPDA/left.jpg"
          variant="main_left"
          alt="main_left"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-[.9rem]">
        <AtomImage
          src="/layoutPDA/right.jpg"
          variant="main_right"
          alt="main_right"
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-[1rem]">
        <AtomImage src="/layoutPDA/top.jpg" variant="main_top" alt="main_top" />
      </div>
    </>
  );
};
