// ============================================================================
// EXERCISE 3: Async Payment Processing
// ============================================================================
// Simulate the processing of multiple payments asynchronously.
// Some payments may fail randomly.
// Use Promise.allSettled to handle successes and errors.

interface Payment {
  id: string;
  amount: number;
  merchant: string;
}

interface PaymentResult {
  successful: Payment[];
  failed: Array<{ payment: Payment; reason: string }>;
}

async function processPayment(payment: Payment): Promise<Payment> {
  // Simulates latency and possible failure
  await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
  if (Math.random() > 0.7) {
    throw new Error(`Payment ${payment.id} failed: insufficient funds`);
  }
  return payment;
}

async function processPaymentsBatch(payments: Payment[]): Promise<PaymentResult> {
  // TODO: Implement using Promise.allSettled
  return { successful: [], failed: [] };
}

// Test
console.log("=== EXERCISE 3 ===");
const payments: Payment[] = [
  { id: "P1", amount: 100, merchant: "Amazon" },
  { id: "P2", amount: 50, merchant: "Netflix" },
  { id: "P3", amount: 200, merchant: "Spotify" }
];
processPaymentsBatch(payments).then(console.log);
