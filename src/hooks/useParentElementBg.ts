import { useEffect, useState } from 'react';

const useParentElementBg = (
  element: React.RefObject<HTMLDivElement>,
  parentLevel: 'parent' | 'greatGrandparent',
): React.CSSProperties['color'][] => {
  const [parentBg, setParentBg] =
    useState<React.CSSProperties['color']>('#000000');

  useEffect(() => {
    const targetElement =
      parentLevel === 'parent'
        ? element.current?.parentElement
        : element.current?.parentElement?.parentElement;

    if (targetElement instanceof HTMLElement) {
      const parentElementBgValue = window
        .getComputedStyle(targetElement)
        .getPropertyValue('backgroundColor');
      setParentBg(parentElementBgValue);
    }
  }, [element, parentLevel]);

  return [parentBg];
};

export { useParentElementBg };
