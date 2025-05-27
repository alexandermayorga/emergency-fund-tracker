import React from "react";
import { FaRegSave, FaRegTrashAlt } from "react-icons/fa";

function ExpenseEditForm() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <input
        className="input input-bordered col-span-2 w-full"
        placeholder="Expense Name"
        type="text"
      />
      <select
        defaultValue="Uncategorized"
        className="select input-bordered col-span-2 w-full"
      >
        <option disabled={true}>Pick a Category</option>
        <option>Uncategorized</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
      <input
        className="input input-bordered col-span-2 w-full"
        placeholder="00.00"
        type="number"
      />
      <button className="btn btn-accent">
        <FaRegSave /> Save
      </button>
      <button className="btn btn-error">
        <FaRegTrashAlt />
        Delete
      </button>
    </div>
  );
}

export default ExpenseEditForm;
