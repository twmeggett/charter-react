import { RewardsProvider } from "./contexts/rewards-provider";
import { CustomerRewardsDashboard } from "./pages/customer-rewards-dashboard/customer-rewards-dashboard.jsx";

function App() {
  return (
    <RewardsProvider>
      <CustomerRewardsDashboard />
    </RewardsProvider>
  )
}

export default App
