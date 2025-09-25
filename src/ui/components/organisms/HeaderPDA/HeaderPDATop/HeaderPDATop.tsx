"use client";

import { memo } from "react";
import { Internet, Timer } from "@molecules";
import { AtomImage } from "@atoms";

const HeaderPDATopComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <Internet />
      <AtomImage
        src={"/layoutPDA/header_layout.png"}
        alt="header_layout"
        variant="header_layout"
        priority
      />
      <Timer />
    </div>
  );
};

export const HeaderPDATop = memo(HeaderPDATopComponent);
