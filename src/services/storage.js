const KEY = "spendify_v1";

export const getEntries = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveEntries = (entries) => {
    localStorage.setItem(KEY, JSON.stringify(entries));
};