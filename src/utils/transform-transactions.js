import { computeRewards } from "./compute-rewards";

export function transformTransactions(transactions, rewardTiers) {
  return transactions
    .map((tx) => ({
      ...tx,
      dateObject: new Date(tx.date), // add a date object for easier sorting and manipulation
      rewards: computeRewards(tx.amount, rewardTiers)
    }))
}
