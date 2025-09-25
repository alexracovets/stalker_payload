"use client";

import { useRef, useState, RefObject, useEffect, useCallback } from "react";

import { MainPage } from "@payload-types";
import { AtomLink } from "@atoms";
import { cn } from "@utils";
import { useNavigationDash } from "@hooks";

interface NavigationPDALinkProps {
  item: MainPage;
  currentMainPage: MainPage | null;
  listRef: React.RefObject<HTMLUListElement | null>;
  triggerLeave: boolean;
}

export const NavigationPDALink = ({
  item,
  currentMainPage,
  listRef,
  triggerLeave,
}: NavigationPDALinkProps) => {
  const elementRef = useRef<HTMLLIElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [linkRef, setLinkRef] = useState<RefObject<HTMLLIElement | null>>({
    current: null,
  });
  useNavigationDash({ listRef, linkRef, spanRef });

  const handleMouseEnter = useCallback(() => {
    setLinkRef({ current: null });
    setTimeout(() => {
      setLinkRef(elementRef);
    }, 0);
  }, [elementRef, setLinkRef]);

  const handleMouseLeave = useCallback(() => {
    setLinkRef({ current: null });
  }, [setLinkRef]);

  useEffect(() => {
    if (triggerLeave && currentMainPage?.slug === item.slug) {
      handleMouseEnter();
    }
  }, [triggerLeave, handleMouseEnter, currentMainPage?.slug, item.slug]);

  useEffect(() => {
    if (currentMainPage?.slug === item.slug) {
      handleMouseEnter();
    }
  }, [currentMainPage?.slug, item.slug, handleMouseEnter]);

  return (
    <li
      ref={elementRef}
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AtomLink
        href={item.slug}
        variant="pda_link"
        style={
          {
            "--before-content": `"${item.title}"`,
          } as React.CSSProperties
        }
        className={cn(
          currentMainPage?.slug === item.slug
            ? "text-main-white-active font-medium"
            : "text-main-gray"
        )}
      >
        <span ref={spanRef} className="text-transparent font-medium">
          {item.title}
        </span>
      </AtomLink>
    </li>
  );
};
