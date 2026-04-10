import { useState, useMemo, useCallback } from "react";
import { toast } from "sonner"

import { defaultTiers } from "@/const"
import { computeTotalsByMonth } from "@/utils/compute-totals-by-month";
import { transformTransactions } from "@/utils/transform-transactions";
import { computeCustomerTotals } from "@/utils/compute-customer-totals";
import { useGetTransactions } from "./use-get-transactions";

export function useRewardsDashboard() {
  const [tiers, setTiers] = useState(defaultTiers);
  const {loading, transactions, error} = useGetTransactions();

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

  const resetTiers = useCallback(() => {
    setTiers(defaultTiers);
  }, [setTiers]);

  const addTier = useCallback((start, mult) => {
    if (tiers.some(b => b.start === start)) {
      return toast.error("A tier with that starting amount already exists");
    }

    if (isNaN(start) || isNaN(mult) || start <= 0 || mult <= 0) {
      return toast.warning("Please enter valid numbers for tier starting amounts and multiplier");
    }

    if (tiers.length >= 5) {
      return toast.error("I think 5 is quite enough tiers for anyone to manage, don't you? ;-)");
    }

    const newUUID = () => Math.random().toString(36).substring(2, 9); // generate a random string as a simple unique ID
    setTiers(prev => [...prev, { id: newUUID(), start, mult }].sort((a, b) => a.start - b.start));
  }, [tiers, setTiers]);

  const removeTier = useCallback(
    (id) => setTiers(prev => prev.filter(b => b.id !== id)),
    [setTiers]
  );

  const tierActions = useMemo(
    () => (
      {
        resetTiers,
        addTier,
        removeTier
      }
    ),
    [resetTiers, addTier, removeTier]
  )

  return {
    tiers,
    setTiers,
    loading,
    error,
    monthlyTotals,
    customerTotals,
    tierActions
  }
} 
