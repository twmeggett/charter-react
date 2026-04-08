export default function RewardsDisplay({ qtrTotals = {} }) {
  return (
    <>
      <h2>Monthly Totals</h2>

      {Object.entries(qtrTotals).map(([month, {amount, rewards}]) => {
        const monthName = new Date(2000, month).toLocaleString('default', { month: 'long' }); // convert month number to name
        
        return (
          <div key={month}>
            <h3>{monthName}</h3>
            <p>Total Spent: ${amount}</p>
            <p>Rewards Earned: {rewards} points</p>
          </div>
        )
      })}
    </>
  );
}
