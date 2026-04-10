export function computeCustomerTotals(monthlyTotals = {}) {
  // Get the totals for each customer by quarter by summing the monthly totals for each month
  const quarterlyTotals = {};

  Object.keys(monthlyTotals).forEach(month => {
    const monthData = monthlyTotals[month];
    Object.keys(monthData).forEach(customerId => {
      if (!quarterlyTotals[customerId]) {
        quarterlyTotals[customerId] = { amount: 0, rewards: 0 };
      }
      quarterlyTotals[customerId].amount += monthData[customerId].amount;
      quarterlyTotals[customerId].rewards += monthData[customerId].rewards;
    });
  });

  return quarterlyTotals;
}
