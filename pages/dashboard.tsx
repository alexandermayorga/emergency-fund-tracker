import { useState, useEffect } from "react";
import { Expense, User } from "../utils/schema";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";

import localforage from "localforage";
import { formatCurrency } from "@/utils/formatCurrency";
import Header from "@/components/Header";
import CategoriesListCard from "@/components/CategoriesListCard";
import TotalsListCard from "@/components/TotalsListCard";
import ExpensesTable from "@/components/ExpensesTable";

function Dashboard() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  useEffect(() => {
    const loadExpenses = async () => {
      const storedExpenses = await localforage.getItem<Expense[]>("expenses");
      if (storedExpenses) setExpenses(storedExpenses);
    };
    loadExpenses();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <CategoriesListCard />
        <TotalsListCard />
      </div>

      <div className="block py-12"></div>

      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="mb-4 text-3xl font-bold">Your Expenses</h1>
          <ExpensesTable expensesData={expenses} />
        </div>
        <div className="col-span-1">
          <h1 className="mb-4 text-3xl font-bold">Results</h1>
          <div className="border border-green-400">
            <div>Total Monthly Income: $4000</div>
            <div>Total Monthly Expenses: $3000</div>
            <div>Total Monthly Leftover: $1000</div>
            <div>Percentage Towards Emergency Fund: $500</div>
          </div>
        </div>
      </div>
    </>
  );
}

// function Dashboard() {
//   const [user, setUser] = useState<User>();

//   useEffect(() => {
//     const loadExpenses = async () => {
//       const storedUser = await localforage.getItem<User>("user");
//       if (storedUser) setUser(storedUser);
//     };
//     loadExpenses();
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl">Dashboard</h1>
//       <div>
//         <b>Name:</b> {user && user?.name}
//       </div>
//       <div>
//         <b>Income:</b> {user && formatCurrency(Number(user?.income))}
//       </div>
//       <div>
//         <b>Target Months:</b> {user && user.emergencyGoal?.months}
//       </div>
//       <div>
//         <b>Current Savings:</b>{" "}
//         {user && formatCurrency(Number(user.emergencyGoal?.currentSavings))}
//       </div>
//     </div>
//   );
// }

export default Dashboard;
