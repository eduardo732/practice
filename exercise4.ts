// ============================================================================
// EXERCISE 4: Rate Limiter for Payment API
// ============================================================================
// Implement a simple rate limiter that allows a maximum of N requests per user
// in a time window. Use a Map to track requests.

class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}

  isAllowed(userId: string): boolean {
    // TODO: Implement here
    // Clean old timestamps and verify if the user can make another request
    return true;
  }
}

// Test
console.log("=== EXERCISE 4 ===");
const limiter = new RateLimiter(3, 1000); // 3 requests per second
console.log(limiter.isAllowed("user1")); // true
console.log(limiter.isAllowed("user1")); // true
console.log(limiter.isAllowed("user1")); // true
console.log(limiter.isAllowed("user1")); // false (exceeds limit)
