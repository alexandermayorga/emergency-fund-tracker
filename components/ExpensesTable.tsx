import { useState, useEffect } from "react";
import localforage from "localforage";

import { Expense } from "../utils/schema";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";

type ExpensesTableProps = {
  expensesData: Expense[];
};

export default function ExpensesTable({ expensesData }: ExpensesTableProps) {
  //   const [expenses, setExpenses] = useState<Expense[]>(expensesData);

  //   useEffect(() => {
  //     const loadExpenses = async () => {
  //       const storedExpenses = await localforage.getItem<Expense[]>("expenses");
  //       if (storedExpenses) setExpenses(storedExpenses);
  //     };
  //     loadExpenses();
  //   }, []);

  return (
    <>
      {expensesData.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <>
          <div className="w-full">
            <div className="w-full min-w-[75%] overflow-x-auto rounded border-2 border-accent">
              <table className="table">
                {/* head */}
                <thead className="bg-accent text-accent-content">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>
                      <button className="flex items-center gap-1">
                        <span>Category</span>
                        <FaSort />
                        {/* <FaSortDown /> */}
                        {/* <FaSortUp /> */}
                      </button>
                    </th>
                    <th>
                      <button className="flex items-center gap-1">
                        <span>Necessary</span>
                        <FaSort />
                        {/* <FaSortDown /> */}
                        {/* <FaSortUp /> */}
                      </button>
                    </th>
                    <th>
                      <button className="flex items-center gap-1">
                        <span>Cost</span>
                        <FaSort />
                        {/* <FaSortDown /> */}
                        {/* <FaSortUp /> */}
                      </button>
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {expensesData.map((expense) => (
                    <tr key={expense.id}>
                      <th>1</th>

                      <td>{expense.name}</td>
                      <td>{expense.category}</td>
                      <td>{expense.necessary ? "Yes" : "No"}</td>
                      <td>{formatCurrency(expense.amount)}</td>
                      <td className="flex gap-1">
                        <button
                          className="btn btn-error btn-sm"
                          title="Delete"
                          name="Delete"
                        >
                          D
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          title="Edit"
                          name="Edit"
                        >
                          E
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          title="Hide"
                          name="Hide"
                        >
                          H
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* row 1 */}
                  {/* <tr>
                        <th>1</th>

                        <td>Car Loan</td>
                        <td>Rent</td>
                        <td>Yes</td>
                        <td>{formatCurrency(1500)}</td>
                        <td className="flex gap-1">
                          <button className="btn btn-error btn-sm">D</button>
                          <button className="btn btn-primary btn-sm">E</button>
                          <button className="btn btn-secondary btn-sm">
                            H
                          </button>
                        </td>
                      </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}
