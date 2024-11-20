import { useState, useEffect } from "react";
import localforage from "localforage";

import Header from "@/components/Header";
import { Expense } from "../utils/schema";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import ExpensesTable from "@/components/ExpensesTable";

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [necessary, setNecessary] = useState(false);

  useEffect(() => {
    const loadExpenses = async () => {
      const storedExpenses = await localforage.getItem<Expense[]>("expenses");
      if (storedExpenses) setExpenses(storedExpenses);
    };
    loadExpenses();
  }, []);

  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      category,
      necessary,
    };

    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    await localforage.setItem("expenses", updatedExpenses);

    // Clear inputs
    setName("");
    setAmount("");
    setCategory("");
    setNecessary(false);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mb-8">
        <h1 className="mb-6 text-3xl font-bold">Manage Expenses</h1>

        <div className="mb-8 rounded bg-accent/40 p-4 text-accent-content shadow">
          <h2 className="mb-3 text-2xl font-bold">New Expense</h2>
          <form
            onSubmit={handleAddExpense}
            className="grid w-full grid-cols-2 gap-4"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">
                Expense Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered w-full rounded"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="input input-bordered w-full rounded"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="input input-bordered w-full rounded"
              />
            </div>

            <div className="">
              <label className="mb-2 block text-sm font-medium">
                Necessary?
              </label>
              <input
                type="checkbox"
                checked={necessary}
                onChange={() => setNecessary(!necessary)}
                className="checkbox"
              />
            </div>
            <button
              type="submit"
              className="btn btn-neutral col-start-2 w-full"
            >
              Add Expense
            </button>
          </form>
        </div>

        <div className="">
          <h2 className="mb-4 text-2xl font-bold">Your Expenses</h2>
          <ExpensesTable expensesData={expenses} />
        </div>
      </div>
    </>
  );
};

export default Expenses;
