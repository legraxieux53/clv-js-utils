export function elementRemoveClass(element: Element, className: string) {
  if (!element.classList.contains(className)) {
    return;
  }
  element.classList.remove(className);
}
