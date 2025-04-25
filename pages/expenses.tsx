import { useState, useEffect } from "react";
import localforage from "localforage";

import Header from "@/components/Header";
import { Expense } from "../utils/schema";
import ExpensesTable from "@/components/ExpensesTable";
import { deleteExpense } from "@/utils/expenses";
import { ExpenseForm } from "@/components/ExpenseForm";

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editID, setEditID] = useState("");

  useEffect(() => {
    const loadExpenses = async () => {
      const storedExpenses = await localforage.getItem<Expense[]>("expenses");
      if (storedExpenses) setExpenses(storedExpenses);
    };
    loadExpenses();
  }, []);

  const handleDeleteExpense = async (id: string) => {
    const updatedExpenses = await deleteExpense(id);
    setExpenses(updatedExpenses);
  };
  const handleEditExpense = async (id: string) => {
    // pass the expense ID to the form component
    setEditID(id);
  };

  const handleFormSubmit = async (expense: Expense, clearForm: Function) => {
    let updatedExpenses: Expense[];

    if (expenses.find((storedExpense) => storedExpense.id === expense.id)) {
      //Edit Expense
      updatedExpenses = expenses.map((storedExpense) => {
        if (storedExpense.id !== expense.id) return storedExpense;
        const updatedExpense = {
          ...expense,
          id: storedExpense.id,
        };
        return updatedExpense;
      });
    } else {
      //Add New Expense
      updatedExpenses = [...expenses, expense];
    }

    setExpenses(updatedExpenses); // Update state
    await localforage.setItem("expenses", updatedExpenses); // Update DB
    clearForm();
    setEditID("");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mb-8">
        <h1 className="mb-6 text-3xl font-bold">Manage Expenses</h1>
        <section>
          <h2 className="mb-4 text-2xl font-bold">New Expense</h2>
          <div className="mb-8 rounded border-2 border-accent bg-accent/10 p-4 text-accent-content shadow">
            <ExpenseForm
              handleFormSubmit={handleFormSubmit}
              editID={editID}
              setEditID={setEditID}
            />
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
