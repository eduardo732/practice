// ============================================================================
// EXERCISE 2: Event Handler for Transactions
// ============================================================================
// Simulate an AWS Lambda handler that processes transaction events.
// Should return transactions grouped by type (DEPOSIT, WITHDRAWAL, TRANSFER)
// and calculate the total for each type.

interface TransactionEvent {
  id: string;
  type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  amount: number;
  timestamp: string;
}

interface LambdaEvent {
  Records: TransactionEvent[];
}

interface ProcessedResult {
  summary: Record<string, { count: number; total: number }>;
  processedCount: number;
}

function lambdaHandler(event: LambdaEvent): ProcessedResult {
  // TODO: Implement here
  const summary: Record<string, { count: number; total: number }> = {};
  let processedCount = 0;

  for (const record of event.Records) {
    if (!summary[record.type]) {
      summary[record.type] = { count: 0, total: 0 };
    }
    summary[record.type].count += 1;
    summary[record.type].total += record.amount;
    processedCount += 1;
  }

  return { summary, processedCount };
}

// Test
console.log("=== EXERCISE 2 ===");
const lambdaEvent: LambdaEvent = {
  Records: [
    { id: "1", type: "DEPOSIT", amount: 100, timestamp: "2026-03-16T10:00:00Z" },
    { id: "2", type: "WITHDRAWAL", amount: 50, timestamp: "2026-03-16T10:05:00Z" },
    { id: "3", type: "DEPOSIT", amount: 200, timestamp: "2026-03-16T10:10:00Z" },
    { id: "4", type: "TRANSFER", amount: 75, timestamp: "2026-03-16T10:15:00Z" }
  ]
};
console.log(lambdaHandler(lambdaEvent));
