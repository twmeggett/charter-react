import { useContext, useMemo } from "react";

import { transformTransactions } from "@/utils/transform-transactions";
import { useGetTransactions } from "../../hooks/use-get-transactions";
import { computeTotalsByMonth } from "@/utils/compute-totals-by-month";
import { computeCustomerTotals } from "@/utils/compute-customer-totals";
import { RewardsStateContext } from "@/contexts/rewards-context";


export function useCustomerRewardsDashboard() {
  const { tiers } = useContext(RewardsStateContext);
  const {transactions, loading, error } = useGetTransactions();

  const sortedRewardedTransactions = useMemo(
    () => {
      const rewarded = transformTransactions(transactions, tiers);
      return rewarded.toSorted((a, b) => a.dateObject - b.dateObject);
    },
    [transactions, tiers]
  );
  
  const monthlyTotals = useMemo(
    () => computeTotalsByMonth(sortedRewardedTransactions),
    [sortedRewardedTransactions]
  );

  const customerTotals = useMemo(
    () => computeCustomerTotals(monthlyTotals),
    [monthlyTotals]
  );

  return {
    monthlyTotals,
    customerTotals,
    loading,
    error
  }
}
