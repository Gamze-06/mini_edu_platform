export const fakePayment = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 1000)
  );
