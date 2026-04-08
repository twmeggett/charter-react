import { computeRewards } from "./computeRewards";

export function computeQtrTotals(transactions, rewardBreaks) {
  const rewardedTransactions = transactions
    .map((tx) => ({
      ...tx,
      rewards: computeRewards(tx.amount, rewardBreaks)
    }))

  
  const qtrTotals = rewardedTransactions.reduce((totals, tx) => {
    const month = new Date(tx.date).toLocaleString('default', { month: 'short' });
    const totalsMonth = totals[month] || { amount: 0, rewards: 0 };
    
    totals[month] = {
      amount: totalsMonth.amount + tx.amount,
      rewards: totalsMonth.rewards + tx.rewards,
    }

    return totals;
  }, {});

  return qtrTotals;
}
