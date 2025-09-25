import { useCallback, useEffect } from "react";

import { useNavigationStore } from "@store";

interface useNavigationDashProps {
  listRef: React.RefObject<HTMLUListElement | null>;
  linkRef: React.RefObject<HTMLLIElement | null>;
  spanRef: React.RefObject<HTMLSpanElement | null>;
}

export const useNavigationDash = ({
  listRef,
  linkRef,
  spanRef,
}: useNavigationDashProps) => {
  const { setIsDash, setDashStyles } = useNavigationStore();

  const boundingClientRect = (element: React.RefObject<HTMLElement | null>) => {
    if (element.current) {
      const elementRect = element.current.getBoundingClientRect();
      return elementRect;
    }
  };

  const getValues = useCallback(() => {
    const listRect = boundingClientRect(listRef);
    const linkRect = boundingClientRect(linkRef);
    const spanRect = boundingClientRect(spanRef);

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
  }, [listRef, linkRef, spanRef, setDashStyles, setIsDash]);

  useEffect(() => {
    getValues();
  }, [getValues]);

  return null;
};
