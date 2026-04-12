import transactionsData from '../../transactions-data.json';

// Simulate an API fetch for transactions

export const fakeTransactionsFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(transactionsData),
      });
    }, 2000);
  });
};
