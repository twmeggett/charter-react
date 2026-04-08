export default function RewardsDisplay({ qtrTotals = {} }) {
  return (
    <div>
      <h2>Monthly Totals</h2>
      
      {Object.entries(qtrTotals).map(([month, {amount, rewards}]) => (
        <div key={month}>
          <h3>{month}</h3>
          <p>Total Spent: ${amount}</p>
          <p>Rewards Earned: {rewards} points</p>
        </div>
      ))}
    </div>
  );
}
