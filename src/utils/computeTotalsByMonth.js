import { addRewardsToTransactions } from "./addRewardsToTransactions";

export function computeTotalsByMonth(transactions, rewardBreaks) {
  const rewardedTransactions = addRewardsToTransactions(transactions, rewardBreaks);
  
  return rewardedTransactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reduce((totals, tx) => {
      const d = new Date(tx.date);
      if (isNaN(d)) { return totals } // skip invalid dates

      const month = d.getMonth(); // getMonth is 0-indexed
      const prevMonth = totals[month] || { amount: 0, rewards: 0 };

      return {
        ...totals,
        [month]: {
          amount: prevMonth.amount + tx.amount,
          rewards: prevMonth.rewards + tx.rewards,
        }
      };
    }, {});
}
