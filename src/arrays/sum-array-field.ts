export function sumArrayField<O>(params: {arr: Array<O>, field: string}) {
  if (!params.arr)
    return 0;
  if (!(params.arr.length > 0))
    return 0;

  if (!params.field || params.field === '' || params.field === null || params.field === undefined) {
    throw new Error(`Le champ ${params.field} n'est pas défini`);
  }

  const keys = Object.keys(params.arr);

  if (!keys.filter((key) => key === params.field)) {
    throw new Error(`Le champ ${params.field} est introuvable dans le tableau d'objets passé`);
  }

  let resultat = 0;
  try {
    params.arr.forEach(item => {
      resultat = resultat + item[params.field];
    });
  } catch (e) {
    throw new Error(`${e}`);
  }

  return resultat;
}
