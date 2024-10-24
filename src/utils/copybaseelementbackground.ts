import { getComputedStyleValue } from './getcomputedstylevalue';

//TODO: document this function
function copySourceBackground(
  sourceElement: HTMLElement,
  targetElement: HTMLElement,
): void {
  const sourceElementBgc = getComputedStyleValue(
    sourceElement,
    'background-color',
  ) as string;

  const sourceElementBg = getComputedStyleValue(
    sourceElement,
    'background',
  ) as string;

  targetElement.style.backgroundColor = sourceElementBgc;
  targetElement.style.background = sourceElementBg;
}

export { copySourceBackground };
