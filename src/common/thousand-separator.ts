import {cleanSpace} from "../strings/clean-space";

/**
 * Ajoute des séparateurs de milliers à un nombre.
 *
 * propriété args:
 * * decimal: boolean => indique le nombre possède une partie décimale
 * * pres: number => indique le nombre de chiffres après la virgule
 * * arround: boolean => indique que la partie décimale est arrondie
 *
 * @param nombre
 * @param args
 */

export function thousandSeparator(params: {nombre: string | number, args?: ThousandSeparatorArg}): string {
  if (!params.args) {
    params.args = {decimal: true, pres: 2, arround: false};
  }

  if (typeof params.nombre !== 'string' && typeof params.nombre !== 'number') {
    throw new Error('The number parameter must be of type string or number');
  }

  // verifier la definition des arguments
  if (!params.args.pres) {
    params.args.pres = 2;
  }

  let nombreStr = '';
  // rendre la chaine utilisable
  if (typeof params.nombre === 'string') {
    nombreStr = cleanSpace({str: params.nombre});
  }

  if (typeof params.nombre === 'number') {
    nombreStr = `${params.nombre}`;
  }

  // separer la partie entiere de la partie decimale
  let partieEntiere = nombreStr.split('.')[0];
  let partieDecimale = nombreStr.split('.')[1];

  // ajouter separateur de millier à la partie entiere
  partieEntiere = addMileSeparator({str: partieEntiere});

  // arrondir partie decimale
  partieDecimale = `0.${partieDecimale}`;
  if (params.args.arround) {
    if (params.args.pres && params.args.pres > 0) {
      const num = Number(+partieDecimale);
      partieDecimale = `${Number(num.toFixed(params.args.pres))}`;
    }
  }
  partieDecimale = partieDecimale.split('.')[1];

  // construire le resultat
  let resultat = partieEntiere;

  if (params.args.decimal) {
    if (params.nombre.toString().indexOf('.') !== -1) {
      if (partieDecimale && partieDecimale !== 'undefined') {
        resultat += `.`;
        resultat += `${partieDecimale}`;
      } else if (params.nombre && params.nombre !== '') {
        resultat += `.`;
      }
    }
  }
  return resultat;
}

/**
 * Ajoute des séparateurs de milliers à une chaine de caractères
 *
 * @param str
 */
export function addMileSeparator(params: {str: string}) {
  let result = '';
  for (let i = 0; i < Math.ceil(params.str.length / 3); i++) {
    const ofs = params.str.length - (i + 1) * 3;
    if (ofs > 0) {
      result = `${params.str.substr(ofs, 3)} ${result}`;
    } else {
      result = `${params.str.substr(0, 3 + ofs)} ${result}`;
    }
    if (i === 0) {
      result = result.substr(0, result.length - 1);
    }
  }
  return result;
}

/**
 * Arguments du separateur de milliers
 */
export interface ThousandSeparatorArg {
  /**
   * indique le nombre possède une partie décimale
   */
  decimal: boolean;
  /**
   * indique le nombre de chiffres après la virgule
   */
  pres: number;
  /**
   * indique que la partie décimale est arrondie
   */
  arround: boolean;
}
