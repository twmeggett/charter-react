import { computeRewards } from "./computeRewards";

export function addRewardsToTransactions(transactions, rewardBreaks) {
  return transactions
    .map((tx) => ({
      ...tx,
      dateObject: new Date(tx.date), // add a date object for easier sorting and manipulation
      rewards: computeRewards(tx.amount, rewardBreaks)
    }))
}
