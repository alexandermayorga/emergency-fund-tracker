import { FormEvent, useState } from "react";
import { Expense } from "@/utils/schema";
import localforage from "localforage";

export type ExpenseFormProps = {
  expense?: Expense;
  handleFormSubmit: Function;
  edit: boolean;
};

export const ExpenseForm = ({
  expense,
  handleFormSubmit,
}: ExpenseFormProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState(expense ? expense.name : "");
  const [amount, setAmount] = useState(
    expense ? expense.amount.toString() : "",
  );
  const [category, setCategory] = useState(expense ? expense.category : "");
  const [necessary, setNecessary] = useState(
    expense ? expense.necessary : false,
  );

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      category,
      necessary,
    };

    handleFormSubmit(newExpense, clearForm);
  };

  const clearForm = () => {
    // // Clear inputs
    setName("");
    setAmount("");
    setCategory("");
    setNecessary(false);
  };

  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: Date.now().toString(),
      name,
      amount: expense ? expense.amount : parseFloat(amount as string),
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

  const handleEditExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Edit Expense");
    // const newExpense: Expense = {
    //   id: Date.now().toString(),
    //   name,
    //   amount: expense ? expense.amount : parseFloat(amount as string),
    //   category,
    //   necessary,
    // };

    // const updatedExpenses = [...expenses, newExpense];
    // setExpenses(updatedExpenses);
    // await localforage.setItem("expenses", updatedExpenses);

    // // Clear inputs
    // setName("");
    // setAmount("");
    // setCategory("");
    // setNecessary(false);
  };

  return (
    <form onSubmit={handleOnSubmit} className="grid w-full grid-cols-2 gap-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Expense Name</label>
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
        <label className="mb-2 block text-sm font-medium">Necessary?</label>
        <input
          type="checkbox"
          checked={necessary}
          onChange={() => setNecessary(!necessary)}
          className="checkbox"
        />
      </div>
      <button type="submit" className="btn btn-neutral col-start-2 w-full">
        Add Expense
      </button>
    </form>
  );
};

/**
 *
 *
 * 2 states: New Form and Update Form
 *
 * control state from parent
 * pass down props
 *
 * New Form
 *
 * Update Form:
 *  needs Expense object
 *
 *
 *
 * if we use the same shell => add if's and thens
 * if we use 2 diff shells => 2 different components to mantain
 *
 */
