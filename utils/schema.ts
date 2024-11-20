// schema.ts

export type User = {
  id: string;
  name: string;
  income: number;
  emergencyGoal: EmergencyGoal;
  budgetRule?: BudgetRule;
  expenses: Expense[];
  settings: UserSettings;
};

export type EmergencyGoal = {
  months: number;
  targetAmount: number;
  currentSavings?: number;
};

export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  necessary: boolean;
  hidden?: boolean;
};

export type UserSettings = {
  theme: "light" | "dark" | "auto";
};

export type BudgetRule = {
  savingsPercentage: number;
  needsPercentage: number;
  wantsPercentage: number;
};
