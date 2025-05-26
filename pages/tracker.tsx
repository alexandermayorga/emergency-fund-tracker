import Header from "@/components/Header";
import {
  FaPlus,
  FaRegSave,
  FaRegPlusSquare,
  FaRegTrashAlt,
  FaEdit,
} from "react-icons/fa";

import { fakeExpenses } from "../utils/data";
import { useState } from "react";

export default function Tracker() {
  const totalExpenses = fakeExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const [rangeValue, setRangeValue] = useState(15); // Default value

  return (
    <>
      <Header />
      <div className="container mx-auto mb-8 grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="my-4 text-4xl font-bold">Emergency Fund Tracker</h1>
          <hr className="mb-4 border-neutral" />
        </div>
        {/* Expenses Column */}
        <div className="col-span-5">
          <div id="expensesTable" className="overflow-x-auto rounded-box">
            <table className="table w-full">
              {/* table head */}
              <thead>
                <tr className="border border-neutral bg-neutral text-lg font-bold text-neutral-content">
                  <th></th>
                  <th className="text-lg">Expenses</th>
                  <th className="text-lg">Category</th>
                  <th className="text-lg">Monthly Cost</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="border">
                {fakeExpenses.map((expense) => (
                  <tr className="hover w-4 cursor-pointer" key={expense.id}>
                    <th className="w-4">{expense.id}</th>
                    <td>{expense.name}</td>
                    <td>CATEGORY</td>
                    <td className="text-center">${expense.amount}</td>
                    <td>
                      <FaEdit className="text-secondary" />
                    </td>
                  </tr>
                ))}

                {/* Expense Edit Mode */}
                <tr className="w-full bg-slate-50">
                  <td className="" colSpan={5}>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        className="input input-bordered col-span-2 w-full"
                        placeholder="Expense Name"
                        type="text"
                      />
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
                  </td>
                  {/* <th>ID</th>
                  <td>Name</td>
                  <td className="text-right">$00.00</td> */}
                </tr>

                {/* No Expenses Mode */}
                <tr className="w-full">
                  <td className="" colSpan={5}>
                    <div className="flex flex-col items-center rounded bg-gray-200 px-2 py-6 text-gray-400">
                      <div className="mb-3 text-2xl">Empty</div>
                      <FaRegPlusSquare className="mb-2 text-2xl" />
                      <div className="text-lg">
                        Start by adding some expenses
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Add New Expense */}
                <tr className="w-full">
                  <td className="" colSpan={5}>
                    <div className="flex gap-2">
                      <button className="btn btn-outline w-full rounded">
                        <FaPlus /> Add New Expense
                      </button>
                    </div>
                  </td>
                  {/* <th>ID</th>
                  <td>Name</td>
                  <td className="text-right">$00.00</td> */}
                </tr>
              </tbody>
              <tfoot>
                {/* Total */}
                <tr className="border border-gray-800 bg-neutral text-lg font-bold text-neutral-content">
                  <td></td>
                  <td className="text-center">Total</td>
                  <td></td>
                  <td className="text-center">
                    ${totalExpenses.toLocaleString()}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* Overview Column */}
        <div className="col-span-5 col-start-8">
          <div className="mb-4 text-3xl font-bold">Your Overview</div>

          <div className="stats mb-4 w-full grid-cols-2 shadow">
            <div className="stat">
              <div className="stat-title">Annual Income</div>
              <div className="stat-value">$89,400</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>
            <div className="stat">
              <div className="stat-title">Monthly Income</div>
              <div className="stat-value">$7,450</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>
          </div>
          <div className="stats mb-4 w-1/2 shadow">
            <div className="stat">
              <div className="stat-title">Monthly Net Income</div>
              <div className="stat-value">$2,000</div>
              <div className="stat-desc">leftover after your expenses</div>
            </div>
          </div>

          <h3 className="mb-2 text-2xl font-bold">
            Monthly Savings: {rangeValue}%
          </h3>
          <p className="mb-4 text-gray-500">
            How much you are planning to set apart for the Emergency Fund
          </p>
          <input
            type="range"
            min={0}
            max="100"
            value={rangeValue}
            className="range range-accent mb-4"
            onChange={(e) => setRangeValue(Number(e.target.value))}
          />

          <div className="stats mb-4 w-full grid-cols-2 shadow">
            <div className="stat text-success">
              <div className="stat-title">Monthly Savings</div>
              <div className="stat-value">$6,000</div>
              <div className="stat-desc">Savings for the Emergency fund</div>
            </div>
            <div className="stat text-primary">
              <div className="stat-title">Total After Savings</div>
              <div className="stat-value">$6,000</div>
              <div className="stat-desc">
                leftover after your expenses and savings
              </div>
            </div>
          </div>
          {/* 
          <div className="mt-4 bg-neutral text-neutral-content">
            Annual Income: $00.00
          </div>
          <div className="bg-success text-success-content">
            Monthly Income: $00.00
          </div>
          <div className="bg-error text-error-content">
            Net Monthly Income{" "}
            <span
              className="tooltip"
              data-tip="This is what's left after your expenses"
            >
              <FaRegQuestionCircle />
            </span>
          </div>
          <div className="bg-error text-error-content">Total $2,337.71</div>
          <div className="bg-info text-info-content">
            Monthly Savings: {rangeValue}%
          </div>
          <input
            type="range"
            min={0}
            max="100"
            value={rangeValue}
            className="range range-info mb-0"
            onChange={(e) => setRangeValue(Number(e.target.value))}
          />
          <div className="bg-info text-info-content">Total $2,337.71</div>
          <div className="bg-accent text-accent-content">
            Monthly After Savings{" "}
            <span
              className="tooltip"
              data-tip="This is what's left after your expenses and savings"
            >
              <FaRegQuestionCircle />
            </span>
          </div>
          <div className="bg-accent text-accent-content">Total $99.99</div> */}
        </div>
      </div>
    </>
  );
}
