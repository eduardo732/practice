// ============================================================================
// EXERCISE 1: Bank Transfer Validation
// ============================================================================
// Create a function that validates bank transfers.
// Should return an object with { valid: boolean, errors: string[] }
// Validations:
// - Amount must be greater than 0
// - Amount must not exceed 50000 per transfer
// - IBANs must have exactly 22 characters
// - Origin and destination cannot be the same

interface BankTransfer {
  from: string; // Origin IBAN
  to: string; // Destination IBAN
  amount: number;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function validateBankTransfer(transfer: BankTransfer): ValidationResult {
  // TODO: Implement here
  let errors: string[] = [];
  let valid = true;
  if (transfer.amount <= 0) {
    valid = false;
    errors.push("Amount must be greater than 0.");
  }
  if (transfer.amount > 50000) {
    valid = false;
    errors.push("Amount must not exceed 50000 per transfer.");
  }
  if (transfer.from.length !== 22) {
    valid = false;
    errors.push("Origin IBAN must have exactly 22 characters.");
  }
  if (transfer.to.length !== 22) {
    valid = false;
    errors.push("Destination IBAN must have exactly 22 characters.");
  }
  if (transfer.from === transfer.to) {
    valid = false;
    errors.push("Origin and destination cannot be the same.");
  }
  return { valid, errors };
}

// Test
console.log("=== EXERCISE 1 ===");
console.log(validateBankTransfer({ from: "ES1234567890123456789012", to: "ES9876543210987654321098", amount: 1000 }));
console.log(validateBankTransfer({ from: "ES123", to: "ES9876543210987654321098", amount: 60000 }));
