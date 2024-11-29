// #TODO ADD ERROR Handlers

import localforage from "localforage";

export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  necessary: boolean;
};

// Key used for storing expenses in localForage
const EXPENSES_KEY = "expenses";

// Retrieve all expenses
export const getExpenses = async (): Promise<Expense[]> => {
  const expenses = await localforage.getItem<Expense[]>(EXPENSES_KEY);
  return expenses || [];
};

// Add a new expense
export const addExpense = async (expense: Expense): Promise<void> => {
  const expenses = await getExpenses();
  expenses.push(expense);
  await localforage.setItem(EXPENSES_KEY, expenses);
};

// Update an expense by ID
export const updateExpense = async (
  id: string,
  updatedExpense: Partial<Expense>,
): Promise<void> => {
  const expenses = await getExpenses();
  const updatedExpenses = expenses.map((expense) =>
    expense.id === id ? { ...expense, ...updatedExpense } : expense,
  );
  await localforage.setItem(EXPENSES_KEY, updatedExpenses);
};

// Delete an expense by ID
export const deleteExpense = async (id: string): Promise<Expense[]> => {
  const expenses = await getExpenses();
  const updatedExpenses = expenses.filter((expense) => expense.id !== id);
  await localforage.setItem(EXPENSES_KEY, updatedExpenses);
  return updatedExpenses;
};

// Fetch a single expense by ID
export const getExpenseById = async (id: string): Promise<Expense | null> => {
  const expenses = await getExpenses();
  const expense = expenses.find((expense) => expense.id === id);
  return expense || null;
};