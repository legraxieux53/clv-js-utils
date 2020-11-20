export function removeFirstChar(str: string): string {
  if (!str) {
    throw new Error('No string given');
  }

  if (str === '' ) {
    return '';
  }

  return str.substr(1, str.length);
}

export function removeLastChar(str: string): string {
  if (!str) {
    throw new Error('No string given');
  }

  if (str === '' ) {
    return '';
  }

  return str.substr(0, str.length - 1);
}
