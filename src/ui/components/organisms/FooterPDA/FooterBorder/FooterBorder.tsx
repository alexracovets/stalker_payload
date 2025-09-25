"use client";

import { AtomImage } from "@atoms";

export const FooterBorder = () => {
  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[.8rem]">
        <AtomImage
          src="/layoutPDA/horizontal_center.jpg"
          variant="footer_horizontal"
          alt="top"
        />
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[.7rem]">
        <AtomImage
          src="/layoutPDA/horizontal_bottom.jpg"
          variant="footer_bottom"
          alt="bottom"
        />
      </div>
      <div className="absolute left-0 top-0 w-[.9rem] h-full">
        <AtomImage
          src="/layoutPDA/left_footer.jpg"
          variant="footer_left"
          alt="left"
        />
      </div>
      <div className="absolute right-0 top-0 w-[.9rem] h-full">
        <AtomImage
          src="/layoutPDA/right_footer.jpg"
          variant="footer_right"
          alt="right"
        />
      </div>
    </>
  );
};
