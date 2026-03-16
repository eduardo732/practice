// ============================================================================
// EXERCISE 9: Retry with Exponential Backoff
// ============================================================================
// Implement a function that retries failed operations with exponential backoff.
// Useful for calls to external APIs or databases.

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  initialDelayMs: number = 1000
): Promise<T> {
  // TODO: Implement retry with exponential backoff
  // Delay should be: initialDelay * 2^attemptNumber
  throw new Error("Not implemented");
}

// Test
console.log("=== EXERCISE 9 ===");
let attemptCount = 0;
async function unreliableApiCall(): Promise<string> {
  attemptCount++;
  if (attemptCount < 3) {
    throw new Error("API temporarily unavailable");
  }
  return "Success!";
}
retryWithBackoff(unreliableApiCall, 5, 100).then(console.log);
