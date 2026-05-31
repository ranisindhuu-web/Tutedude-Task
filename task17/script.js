// ==========================================================================
// Task: JavaScript Division Engine using Asynchronous Promises
// ==========================================================================

/**
 * Performs numerical division wrapper wrapped inside a JavaScript Promise structure.
 * Requirement met: Defined as a clean, concise Arrow Function.
 * * @param {number} num1 - The dividend (numerator)
 * @param {number} num2 - The divisor (denominator)
 * @returns {Promise} Resolves with the quotient value, or rejects on invalid denominator logic
 */
const safeDivide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        // Validation check: If second number is zero, trigger explicit rejection state
        if (num2 === 0) {
            reject("Error: Division by zero is mathematically undefined.");
        } else {
            // Otherwise, resolve successfully with calculated quotient outcome
            resolve(num1 / num2);
        }
    });
};

// ==========================================================================
// EXECUTION PIPELINE: Testing 5 Diverse Cases using Dummy Values
// Handles resolved or rejected states via standard consumer blocks (.then/.catch)
// ==========================================================================

console.log("--- INITIATING ASYNCHRONOUS PROMISE TESTS ---");

// --- CASE 1: Standard Clean Even Division ---
safeDivide(100, 5)
    .then(result => console.log("Case 1 Result (100 / 5)     => Resolved: " + result))
    .catch(error => console.error("Case 1 Error                => Rejected: " + error));

// --- CASE 2: Division Resulting in a Repeating Decimal ---
safeDivide(10, 3)
    .then(result => console.log("Case 2 Result (10 / 3)      => Resolved: " + result.toFixed(4)))
    .catch(error => console.error("Case 2 Error                => Rejected: " + error));

// --- CASE 3: Division handling a Zero Dividend (Allowed) ---
safeDivide(0, 25)
    .then(result => console.log("Case 3 Result (0 / 25)       => Resolved: " + result))
    .catch(error => console.error("Case 3 Error                => Rejected: " + error));

// --- CASE 4: Negative Number Calculations ---
safeDivide(-50, 2)
    .then(result => console.log("Case 4 Result (-50 / 2)     => Resolved: " + result))
    .catch(error => console.error("Case 4 Error                => Rejected: " + error));

// --- CASE 5: Division by Zero Trap (Triggers Rejection Exception)
safeDivide(75, 0)
    .then(result => console.log("Case 5 Result (75 / 0)      => Resolved: " + result))
    .catch(error => console.log("Case 5 Error (75 / 0)       => Caught Rejection: " + error));