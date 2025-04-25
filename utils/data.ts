import { Expense } from "./schema";

export const fakeExpenses: Expense[] = [
  {
    id: "1",
    name: "Rent",
    amount: 1200,
    category: "Housing",
    necessary: true,
  },
  {
    id: "2",
    name: "Groceries",
    amount: 350,
    category: "Food",
    necessary: true,
  },
  {
    id: "3",
    name: "Netflix",
    amount: 15,
    category: "Subscriptions",
    necessary: false,
  },
  {
    id: "4",
    name: "Car Insurance",
    amount: 100,
    category: "Insurance",
    necessary: true,
  },
  {
    id: "5",
    name: "Dining Out",
    amount: 80,
    category: "Entertainment",
    necessary: false,
  },
  {
    id: "6",
    name: "Electricity Bill",
    amount: 90,
    category: "Utilities",
    necessary: true,
  },
  {
    id: "7",
    name: "Spotify",
    amount: 10,
    category: "Subscriptions",
    necessary: false,
  },
  {
    id: "8",
    name: "Gym Membership",
    amount: 50,
    category: "Health & Fitness",
    necessary: false,
  },
  {
    id: "9",
    name: "Student Loan Payment",
    amount: 300,
    category: "Debt",
    necessary: true,
  },
  {
    id: "10",
    name: "Internet Bill",
    amount: 60,
    category: "Utilities",
    necessary: true,
  },
];
