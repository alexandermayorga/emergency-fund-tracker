import { useState } from "react";
import { useRouter } from "next/router";
import localforage from "localforage";
import { User, EmergencyGoal } from "../utils/schema";

const Onboarding = () => {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [months, setMonths] = useState("");
  const [currentSavings, setCurrentSavings] = useState("0");
  const [errors, setErrors] = useState({
    name: "",
    income: "",
    months: "",
    currentSavings: "",
  });
  const router = useRouter();

  const validateForm = () => {
    const newErrors = { name: "", income: "", months: "", currentSavings: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!income || isNaN(Number(income)) || Number(income) <= 0) {
      newErrors.income = "Valid income is required";
    }
    if (!months || isNaN(Number(months)) || Number(months) <= 0) {
      newErrors.months = "Valid months number is required";
    }
    if (
      !currentSavings ||
      isNaN(Number(currentSavings)) ||
      Number(currentSavings) < 0
    ) {
      newErrors.currentSavings = "Valid current savings is required";
    }

    setErrors(newErrors);
    return (
      !newErrors.name &&
      !newErrors.income &&
      !newErrors.months &&
      !newErrors.currentSavings
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Prepare EmergencyGoal object based on user input
    const emergencyGoal: EmergencyGoal = {
      months: parseInt(months),
      targetAmount: 0, // targetAmount will be calculated later based on expenses
      currentSavings: parseFloat(currentSavings),
    };

    // Create the User object
    const userData: User = {
      id: Date.now().toString(),
      name,
      income: parseFloat(income),
      emergencyGoal,
      expenses: [],
      settings: {
        theme: "auto", // Default theme
      },
    };

    // Save the user data in local storage
    await localforage.setItem("user", userData);

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-bold">Onboarding</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label className="mb-2 block font-bold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-bold">Monthly Income</label>
          <div className="mb-2 text-sm text-gray-600">
            Whatever you get after taxes monthly
          </div>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`input input-bordered w-full ${errors.income ? "input-error" : ""}`}
          />
          {errors.income && (
            <p className="text-sm text-red-500">{errors.income}</p>
          )}
        </div>
        <div>
          <label className="block font-bold">
            Emergency Fund Goal (Months)
          </label>
          <div className="mb-2 text-sm text-gray-600">
            How long will you be able to survive on your emergency fund
          </div>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className={`input input-bordered w-full ${errors.months ? "input-error" : ""}`}
          />
          {errors.months && (
            <p className="text-sm text-red-500">{errors.months}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block font-bold">Current Savings</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className={`input input-bordered w-full ${errors.currentSavings ? "input-error" : ""}`}
          />
          {errors.currentSavings && (
            <p className="text-sm text-red-500">{errors.currentSavings}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Start Tracking
        </button>
      </form>
    </div>
  );
};

export default Onboarding;
