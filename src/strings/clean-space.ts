/**
 * Supprimes les espaces d'une chaine de caractères
 * @param str
 */
export function cleanSpace(params: {str: string}): string {
  return params.str.replace(/\s/g, '');
}

