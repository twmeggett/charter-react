export function computeTotalsByMonth(transactions) {
  return transactions
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
