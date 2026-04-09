import { useState, useEffect } from "react";

import customerData from '../../customer-data.json';

export function useGetTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // simulate loading data from an API
    setTimeout(() => {
      setTransactions(customerData.transactions);
      setLoading(false);
    }, 2000)
  }, [])

  return {
    transactions,
    loading
  }
}
