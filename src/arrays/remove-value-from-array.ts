import objectPath from 'object-path';

export function removeValueFromArray(params: {arr: Array<any>, key: string, value: any}) {
    if (!params.arr) throw new Error('no array');
    if (!params.key) throw new Error('no key');
    if (!params.value) throw new Error('no value');
    params.arr.filter(item => {
        const data = objectPath.get(item, params.key);
        return data === params.value;
    });
}