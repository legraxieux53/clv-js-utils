export function elementAddAttributes(element: Element, attrs: {[key: string]: string}) {
  if (!element) {
    throw new Error('No element provided');
  }

  if (!attrs) {
    throw new Error('No attribute provided');
  }

  Object.keys(attrs).forEach(key => {
    element.setAttribute(key, attrs[key]);
  });
}
