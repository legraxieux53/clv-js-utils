/**
 * Determine le type des objets et variables en JS
 */
export function jsType(params: {obj: any}): string {
  if (params.obj === null) {
    return 'null';
  }
  if (params.obj === undefined) {
    return 'undefined';
  }
  if (typeof params.obj === 'string') {
    return 'string';
  }
  if (params.obj.length >= 0) {
    return 'array';
  }
  return typeof params.obj;
}
