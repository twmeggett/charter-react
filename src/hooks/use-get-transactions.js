import { useState, useEffect } from "react";

import customerData from '../../customer-data.json';

export function useGetTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fakeTransactionsFetch = (url) => {
    console.log(`Fetching transactions from ${url}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(customerData),
        });
      }, 2000);
    });
  };

  useEffect(() => { // simulate loading data from an API
    fakeTransactionsFetch('/api/transactions')
      .then(res => res.json())
      .then(data => {
        setTransactions(data.transactions);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      });
  }, [])

  return {
    transactions,
    loading
  }
}
