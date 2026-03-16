// ============================================================================
// EXERCISE 5: Event Sourcing - Calculate Account Balance
// ============================================================================
// Given a series of events, calculate the final balance of an account.
// Implement the Event Sourcing pattern.

type AccountEvent =
  | { type: "ACCOUNT_CREATED"; accountId: string; initialBalance: number }
  | { type: "DEPOSIT"; amount: number }
  | { type: "WITHDRAWAL"; amount: number }
  | { type: "INTEREST_APPLIED"; rate: number };

interface AccountState {
  accountId: string;
  balance: number;
  eventCount: number;
}

function calculateAccountBalance(events: AccountEvent[]): AccountState {
  // TODO: Implement here by applying each event
  return { accountId: "", balance: 0, eventCount: 0 };
}

// Test
console.log("=== EXERCISE 5 ===");
const accountEvents: AccountEvent[] = [
  { type: "ACCOUNT_CREATED", accountId: "ACC001", initialBalance: 1000 },
  { type: "DEPOSIT", amount: 500 },
  { type: "WITHDRAWAL", amount: 200 },
  { type: "INTEREST_APPLIED", rate: 0.05 } // 5% interest
];
console.log(calculateAccountBalance(accountEvents));
