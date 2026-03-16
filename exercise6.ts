// ============================================================================
// EXERCISE 6: Circuit Breaker for Microservice Calls
// ============================================================================
// Implement the Circuit Breaker pattern to protect calls to external services.
// States: CLOSED (normal), OPEN (blocked), HALF_OPEN (testing)

type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

class CircuitBreaker {
  private state: CircuitState = "CLOSED";
  private failureCount: number = 0;
  private lastFailureTime: number = 0;

  constructor(
    private failureThreshold: number,
    private timeoutMs: number
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    // TODO: Implement circuit breaker logic
    // - If OPEN and timeout hasn't passed, throw error immediately
    // - If OPEN and timeout passed, change to HALF_OPEN
    // - If CLOSED or HALF_OPEN, execute the function
    // - Handle successes and failures by updating the state
    throw new Error("Not implemented");
  }

  getState(): CircuitState {
    return this.state;
  }
}

// Test
console.log("=== EXERCISE 6 ===");
const breaker = new CircuitBreaker(3, 5000);
// Here you would implement tests simulating failing calls
