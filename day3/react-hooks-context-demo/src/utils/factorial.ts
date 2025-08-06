// Slow factorial, with pause to simulating heavy calculation
export function slowFactorial(n: number): number {
  let result = 1;
  // Artificial delay
  for (let i = 2; i <= n; i++) {
    const t = Date.now() + 15;
    // Busy-wait
    while (Date.now() < t) {}
    result *= i;
  }
  return result;
}
