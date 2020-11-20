/**
 * Duplique une variable. Cette fonction est utilisée pour éviter l'affectation par referencement d'addresse mémoire.
 */
import {jsType} from "./jstype";

export function copy<O>(params: {obj: O}): O {
  if (jsType({obj: params.obj}) === 'array') {
    return Object.assign([], params.obj);
  }
  if (jsType({obj: params.obj}) === 'object') {
    return Object.assign({}, params.obj);
  }
  return JSON.parse(JSON.stringify(params.obj));
}
