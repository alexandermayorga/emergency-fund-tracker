import { useEffect, useState } from "react";
import { Expense } from "@/utils/schema";
import { getExpenseById } from "@/utils/expenses";

export type ExpenseFormProps = {
  handleFormSubmit: Function;
  editID: string;
  setEditID: Function;
};

export const ExpenseForm = ({
  handleFormSubmit,
  editID,
  setEditID,
}: ExpenseFormProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [necessary, setNecessary] = useState(false);

  useEffect(() => {
    const loadExpenseToEdit = async (id: string) => {
      const storedExpense = await getExpenseById(id);
      if (storedExpense) {
        setName(storedExpense.name);
        setAmount(storedExpense.amount.toString());
        setCategory(storedExpense.category);
        setNecessary(storedExpense.necessary);
      }
    };
    if (editID !== "") loadExpenseToEdit(editID);
  }, [editID]);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const expense: Expense = {
      id: editID || Date.now().toString(),
      name,
      amount: parseFloat(amount),
      category,
      necessary,
    };

    handleFormSubmit(expense, clearForm);
  };

  const clearForm = () => {
    // // Clear inputs
    setName("");
    setAmount("");
    setCategory("");
    setNecessary(false);
  };

  const handleCancelEdit = () => {
    clearForm();
    setEditID("");
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
      {editID !== "" ? (
        <>
          <button
            onClick={handleCancelEdit}
            type="button"
            className="btn w-full"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-accent col-start-2 w-full">
            Edit Expense
          </button>
        </>
      ) : (
        <button type="submit" className="btn btn-neutral col-start-2 w-full">
          Add Expense
        </button>
      )}
    </form>
  );
};
