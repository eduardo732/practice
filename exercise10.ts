// ============================================================================
// EXERCISE 10: Microservices Aggregator
// ============================================================================
// Combine data from multiple microservices to create a unified view.
// Simulate calls to user, account, and transaction services.

interface User {
  id: string;
  name: string;
  email: string;
}

interface Account {
  userId: string;
  accountNumber: string;
  balance: number;
}

interface TransactionHistory {
  accountNumber: string;
  transactions: Array<{ id: string; amount: number; date: string }>;
}

interface UserDashboard {
  user: User;
  accounts: Array<{
    accountNumber: string;
    balance: number;
    recentTransactions: Array<{ id: string; amount: number; date: string }>;
  }>;
  totalBalance: number;
}

// Simulate microservice calls
async function fetchUser(userId: string): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return { id: userId, name: "John Doe", email: "john@example.com" };
}

async function fetchAccounts(userId: string): Promise<Account[]> {
  await new Promise(resolve => setTimeout(resolve, 150));
  return [
    { userId, accountNumber: "ACC001", balance: 5000 },
    { userId, accountNumber: "ACC002", balance: 3000 }
  ];
}

async function fetchTransactions(accountNumber: string): Promise<TransactionHistory> {
  await new Promise(resolve => setTimeout(resolve, 120));
  return {
    accountNumber,
    transactions: [
      { id: "T1", amount: -50, date: "2026-03-15" },
      { id: "T2", amount: 200, date: "2026-03-14" }
    ]
  };
}

async function aggregateUserDashboard(userId: string): Promise<UserDashboard> {
  // TODO: Implement data aggregation from the 3 microservices
  // Optimize calls to be as parallel as possible
  throw new Error("Not implemented");
}

// Test
console.log("=== EXERCISE 10 ===");
aggregateUserDashboard("USER123").then(console.log);
