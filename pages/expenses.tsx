import { useState, useEffect } from "react";
import localforage from "localforage";

import Header from "@/components/Header";
import { Expense } from "../utils/schema";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import ExpensesTable from "@/components/ExpensesTable";
import { deleteExpense } from "@/utils/expenses";
import { ExpenseForm } from "@/components/ExpenseForm";

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  // const [name, setName] = useState("");
  // const [amount, setAmount] = useState("");
  // const [category, setCategory] = useState("");
  // const [necessary, setNecessary] = useState(false);
  const [editID, setEditID] = useState("");

  useEffect(() => {
    const loadExpenses = async () => {
      const storedExpenses = await localforage.getItem<Expense[]>("expenses");
      if (storedExpenses) setExpenses(storedExpenses);
    };
    loadExpenses();
  }, []);

  const handleDeleteExpense = async (id: string) => {
    // console.log(id);
    const updatedExpenses = await deleteExpense(id);
    setExpenses(updatedExpenses);
  };
  const handleEditExpense = async (id: string) => {
    // console.log("Edit: " + id);
    // pass the expense ID to the form component
    setEditID(id);
  };

  const handleFormSubmit = async (expense: Expense, clearForm: Function) => {
    let updatedExpenses: Expense[];

    if (expenses.find((storedExpense) => storedExpense.id === expense.id)) {
      updatedExpenses = expenses.map((storedExpense) => {
        if (storedExpense.id !== expense.id) return storedExpense;
        const updatedExpense = {
          ...expense,
          id: storedExpense.id,
        };
        return updatedExpense;
      });
    } else {
      updatedExpenses = [...expenses, expense];
    }

    setExpenses(updatedExpenses);
    await localforage.setItem("expenses", updatedExpenses);
    clearForm();
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mb-8">
        <h1 className="mb-6 text-3xl font-bold">Manage Expenses</h1>
        <section>
          <h2 className="mb-4 text-2xl font-bold">New Expense</h2>
          <div className="mb-8 rounded border-2 border-accent bg-accent/10 p-4 text-accent-content shadow">
            {/* <UpdateExpenseForm /> */}
            {/* <NewExpenseForm /> */}
            {/* <ExpenseForm edit expense={expense} /> */}
            {/* <ExpenseForm action={"edit"} expense={expense} /> */}
            <ExpenseForm
              handleFormSubmit={handleFormSubmit}
              editID={editID}
              setEditID={setEditID}
            />
            {/* <br />
            <br /> */}
            {/* <form
              onSubmit={handleAddExpense}
              className="d-none grid w-full grid-cols-2 gap-4 bg-primary"
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
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>
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
            </form> */}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Your Expenses</h2>
          <ExpensesTable
            expensesData={expenses}
            deleteExpense={handleDeleteExpense}
            editExpense={handleEditExpense}
          />
        </section>
      </div>
    </>
  );
};

export default Expenses;
