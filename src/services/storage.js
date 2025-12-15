const KEY = "finance_transactions";

export const getTransactions = () =>
    JSON.parse(localStorage.getItem(KEY)) || [];

export const saveTransactions = (data) =>
    localStorage.setItem(KEY, JSON.stringify(data));

export const clearTransactions = () =>
    localStorage.removeItem(KEY);
