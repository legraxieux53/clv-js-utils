export function elementAddClass(element: Element, className: string) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
  element.classList.add(className);
}
