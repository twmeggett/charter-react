import { useContext, useEffect } from "react";

import { RewardsDispatchContext, RewardsStateContext } from "@/contexts/rewards-context";
import { fakeTransactionsFetch } from "@/api/get-transactions";
import { errorLoadingTransactions, loadTransactions, startLoadingTransactions } from "@/reducers/rewards-reducer";

export function useGetTransactions() {
  const { transactions, loading, error } = useContext(RewardsStateContext);
  const dispatch = useContext(RewardsDispatchContext);

  useEffect(() => { // simulate loading data from an API
    dispatch(startLoadingTransactions());
    fakeTransactionsFetch()
      .then(res => res.json())
      .then(data => {
        dispatch(loadTransactions(data));
      })
      .catch(error => {
        console.error("Error fetching transactions:", error);
        dispatch(errorLoadingTransactions(error));
      });
  }, [dispatch]);

  return {
    loading,
    transactions,
    error
  }
}
