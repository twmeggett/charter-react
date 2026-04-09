import { useState, useMemo } from "react";

import { defaultBreaks } from "@/const"
import { computeTotalsByMonth } from "@/utils/computeTotalsByMonth";
import { transformTransactions } from "@/utils/transformTransactions";
import { useGetTransactions } from "./useGetTransactions";

export function useRewardsDashboard() {
  const [breaks, setBreaks] = useState(defaultBreaks);
  const {loading, transactions} = useGetTransactions();
  const sortedRewardedTransactions = useMemo(
    () => {
      const rewarded = transformTransactions(transactions, breaks);
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
