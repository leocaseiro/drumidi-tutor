import { Drivers, Storage } from '@ionic/storage';

let storage: Storage;

export const createStore = (name = '__drumidi_db') => {
    storage = new Storage({
        name,
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });

    storage.create();
};

export const set = <T,>(key: string, val: T) => {
    storage.set(key, val);
};

export const get = async <T,>(key: string) => {
    const val: T = await storage.get(key);
    return val;
};

export const remove = async (key: string) => {
    await storage.remove(key);
};

export const clear = async () => {
    await storage.clear();
};

export const setObject = async <T extends { id: string }>(
    key: string,
    id: string,
    val: T
) => {
    const all = await storage.get(key);
    const objIndex = await all.findIndex(
        (a: T) => parseInt(a.id) === parseInt(id)
    );

    all[objIndex] = val;
    set(key, all);
};

export const removeObject = async <T extends { id: string }>(
    key: string,
    id: string
) => {
    const all = await storage.get(key);
    const objIndex = await all.findIndex(
        (a: T) => parseInt(a.id) === parseInt(id)
    );

    all.splice(objIndex, 1);
    set(key, all);
};

export const getObject = async <T extends { id: string }>(
    key: string,
    id: string
) => {
    const all = await storage.get(key);
    const obj = await all.filter((a: T) => parseInt(a.id) === parseInt(id))[0];
    return obj;
};
