const delayInput=parseFloat( document.querySelector('input[type="number"][name="delay"]'));
const stepInput =parseFloat (document.querySelector('input[type="number"][name="step"]'));
const amountInput=parseFloat (document.querySelector('input[type="number"][name="amount"]'));
const submitBtn=(document.querySelector('button[type="submit"]'));







function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
