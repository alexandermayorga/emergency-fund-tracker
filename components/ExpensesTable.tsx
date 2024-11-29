import { Expense } from "../utils/schema";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";

export type ExpensesTableProps = {
  expensesData: Expense[];
  deleteExpense: Function;
  editExpense: Function;
};

export default function ExpensesTable({
  expensesData,
  deleteExpense,
  editExpense,
}: ExpensesTableProps) {
  const handleDeleteBtn = (id: string) => {
    // console.log("Delete: " + id);
    deleteExpense(id);
  };

  const handleEditBtn = (id: string) => {
    // console.log("Edit: " + id);
    editExpense(id);
  };

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
                  {expensesData.map((expense, index) => (
                    <tr key={expense.id}>
                      <th>{index + 1}</th>

                      <td>{expense.name}</td>
                      <td>{expense.category}</td>
                      <td>{expense.necessary ? "Yes" : "No"}</td>
                      <td>{formatCurrency(expense.amount)}</td>
                      <td className="flex gap-1">
                        <button
                          className="btn btn-error btn-sm"
                          title="Delete"
                          name="Delete"
                          onClick={() => handleDeleteBtn(expense.id)}
                        >
                          D
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          title="Edit"
                          name="Edit"
                          onClick={() => handleEditBtn(expense.id)}
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
