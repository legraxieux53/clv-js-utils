import objectPath from 'object-path';

/**
 * This is an array utils collection for help development
 * @deprecated (use removeValueFromArray)
 */
export class ClvArrayUtils {

    /**
     * Remove item in array that has specified value. Key may be a path.
     */
    static removeFromArrayByValue(arr: Array<any>, key: string, value: any) {
        if (!arr) throw new Error('no array');
        if (!key) throw new Error('no key');
        if (!value) throw new Error('no value');
        arr.filter(item => {
            const data = objectPath.get(item, key);
            return data === value;
        });
    }
}