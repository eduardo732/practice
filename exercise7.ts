// ============================================================================
// EXERCISE 7: Fraud Detection in Transactions
// ============================================================================
// Analyze transactions and mark as suspicious if they meet criteria:
// - More than 3 transactions in less than 5 minutes
// - Total amount exceeding 10000 in one hour
// - Transactions from more than 2 different countries in 1 hour

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  timestamp: Date;
  country: string;
}

interface FraudAnalysis {
  suspicious: boolean;
  reasons: string[];
  riskScore: number; // 0-100
}

function detectFraud(userTransactions: Transaction[]): FraudAnalysis {
  // TODO: Implement fraud detection
  return { suspicious: false, reasons: [], riskScore: 0 };
}

// Test
console.log("=== EXERCISE 7 ===");
const now = new Date();
const suspiciousTransactions: Transaction[] = [
  { id: "T1", userId: "U1", amount: 3000, timestamp: new Date(now.getTime() - 2 * 60000), country: "ES" },
  { id: "T2", userId: "U1", amount: 4000, timestamp: new Date(now.getTime() - 1 * 60000), country: "US" },
  { id: "T3", userId: "U1", amount: 5000, timestamp: now, country: "UK" }
];
console.log(detectFraud(suspiciousTransactions));
