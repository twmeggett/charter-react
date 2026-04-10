export function computeTotalsByMonth(transactions) {
  return transactions.reduce((totals, tx) => {
    const d = tx.dateObject;
    if (!d || isNaN(d.getTime())) return totals;

    const month = d.toLocaleString('default', { month: 'short' }); // using short here so that they aren't computed in potential UI re-renders 
    const customer = tx.customerId;

    if (!totals[month]) {
      totals[month] = {}
    };
    if (!totals[month][customer]) {
      totals[month][customer] = { amount: 0, rewards: 0 }
    };

    // mutating for performance, but could be refactored to be more functional if desired
    totals[month][customer].amount += tx.amount || 0;
    totals[month][customer].rewards += tx.rewards || 0;

    return totals;
  }, {});
}
