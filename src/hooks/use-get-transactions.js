import { useState, useEffect } from "react";

import { fakeTransactionsFetch } from "@/utils/get-transactions";

export function useGetTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => { // simulate loading data from an API
    fakeTransactionsFetch()
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching transactions:", error);
        setError(error)
        setLoading(false);
      });
  }, [])

  return {
    transactions,
    loading,
    error
  }
}
