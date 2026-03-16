// ============================================================================
// EXERCISE 8: Message Queue Publisher/Consumer
// ============================================================================
// Simulate a queue system with pub/sub pattern for transaction events.

interface TransactionEvent {
  id: string;
  type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  amount: number;
  timestamp: string;
}

type EventHandler<T> = (event: T) => void | Promise<void>;

class EventBus<T = any> {
  private subscribers: Map<string, EventHandler<T>[]> = new Map();

  subscribe(eventType: string, handler: EventHandler<T>): void {
    // TODO: Implement subscription
  }

  async publish(eventType: string, event: T): Promise<void> {
    // TODO: Implement publication (execute all subscribed handlers)
  }

  unsubscribe(eventType: string, handler: EventHandler<T>): void {
    // TODO: Implement unsubscription
  }
}

// Test
console.log("=== EXERCISE 8 ===");
const eventBus = new EventBus<TransactionEvent>();
eventBus.subscribe("DEPOSIT", (event) => console.log("Handler 1:", event));
eventBus.subscribe("DEPOSIT", (event) => console.log("Handler 2:", event));
eventBus.publish("DEPOSIT", { id: "1", type: "DEPOSIT", amount: 100, timestamp: new Date().toISOString() });
