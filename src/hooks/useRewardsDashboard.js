import { useState, useMemo } from "react";

import { defaultBreaks } from "@/const"
import { computeTotalsByMonth } from "@/utils/computeTotalsByMonth";
import { addRewardsToTransactions } from "@/utils/addRewardsToTransactions";
import { useGetTransactions } from "./useGetTransactions";

export function useRewardsDashboard() {
  const [breaks, setBreaks] = useState(defaultBreaks);
  const {loading, transactions} = useGetTransactions();
  const sortedRewardedTransactions = useMemo(
    () => {
      const rewarded = addRewardsToTransactions(transactions, breaks);
      return [...rewarded].sort((a, b) => a.dateObject - b.dateObject)
    },
    [transactions, breaks]
  );
  const qtrTotals = useMemo(
    () => computeTotalsByMonth(sortedRewardedTransactions),
    [sortedRewardedTransactions]
  );

  return {
    breaks,
    setBreaks,
    loading,
    sortedRewardedTransactions,
    qtrTotals
  }
} 
