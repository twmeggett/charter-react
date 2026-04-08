import { computeRewards } from "./computeRewards";

export function addRewardsToTransactions(transactions, rewardBreaks) {
  return transactions.map((tx) => ({
    ...tx,
    rewards: computeRewards(tx.amount, rewardBreaks)
  }));
}
