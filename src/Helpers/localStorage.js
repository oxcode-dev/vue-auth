import localForage from 'localforage';

export const setInStorage = async (key, value) => {
    return await localForage.setItem(key, value)
}

export const getInStorage = async (key) => {
    return await localForage.getItem(key)
}

export const removeInStorage = async (key) => {
    return await localForage.removeItem(key)
}

export const clearStorage = async () => {
    return await localForage.clear()
}