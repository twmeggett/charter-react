import { useMemo } from "react";

import { addRewardsToTransactions } from "@/utils/addRewardsToTransactions";

export function useRewardAndSortTransactions(transactions, rewardBreaks) {
  return useMemo(
      () => addRewardsToTransactions(transactions, rewardBreaks)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
      [transactions, rewardBreaks]
  );
}
