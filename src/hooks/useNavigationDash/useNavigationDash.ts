import { useCallback, useEffect } from "react";

import { useNavigationStore } from "@store";

interface useNavigationDashProps {
  listRef: React.RefObject<HTMLUListElement | null>;
  hoveredRef: React.RefObject<HTMLLIElement | null>;
  hoveredSpanRef: React.RefObject<HTMLSpanElement | null>;
  currentPageRef: React.RefObject<HTMLLIElement | null>;
  currentPageSpanRef: React.RefObject<HTMLSpanElement | null>;
}

interface GetValuesProps {
  list: React.RefObject<HTMLElement | null>;
  link: React.RefObject<HTMLElement | null>;
  span: React.RefObject<HTMLElement | null>;
}

export const useNavigationDash = ({
  listRef,
  hoveredRef,
  hoveredSpanRef,
  currentPageRef,
  currentPageSpanRef,
}: useNavigationDashProps) => {
  const { setIsDash, setDashStyles } = useNavigationStore();

  const boundingClientRect = (element: React.RefObject<HTMLElement | null>) => {
    if (element.current) {
      const elementRect = element.current.getBoundingClientRect();
      return elementRect;
    }
  };

  const getValues = useCallback(
    ({ list, link, span }: GetValuesProps) => {
      const listRect = boundingClientRect(list);
      const linkRect = boundingClientRect(link);
      const spanRect = boundingClientRect(span);
      if (linkRect?.left && listRect?.left && spanRect?.left) {
        setDashStyles({
          underline: {
            left: `${linkRect?.left - listRect?.left}px`,
            width: `${linkRect?.width}px`,
          },
          shortline: {
            left: `${spanRect?.left - listRect?.left}px`,
            width: `${spanRect?.width}px`,
          },
        });
      }
      setIsDash(true);
    },
    [setDashStyles, setIsDash]
  );

  useEffect(() => {
    if (listRef) {
      if (hoveredRef.current && hoveredSpanRef.current) {
        getValues({ list: listRef, link: hoveredRef, span: hoveredSpanRef });
      } else if (currentPageRef.current && currentPageSpanRef.current) {
        getValues({
          list: listRef,
          link: currentPageRef,
          span: currentPageSpanRef,
        });
      }
    }
  }, [
    listRef,
    hoveredRef,
    hoveredSpanRef,
    currentPageRef,
    currentPageSpanRef,
    getValues,
  ]);

  return null;
};
