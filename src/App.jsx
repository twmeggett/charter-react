import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";

import { RewardsDashboardContext } from "@/contexts/rewards-dashboard-context";
import { RewardTiersDrawer } from '@/components/reward-tiers-drawer';
import { RewardsGraph } from "@/components/rewards-graph";
import { TransactionsTable } from "@/components/transactions-table";
import { useRewardsDashboard } from "@/hooks/use-rewards-dashboard";

function App() {
  const { 
    tiers,
    loading,
    sortedRewardedTransactions,
    qtrTotals,
    tierActions
  } = useRewardsDashboard();
  
  const loadingTemplate = (
    <div className="flex flex-1 justify-center items-center">
      <Spinner position="center" />
    </div>
  );

  const contentTemplate = (
    <>
      <RewardsGraph qtrTotals={qtrTotals} />
      <div className="md:h-150 overflow-y-scroll">
        <TransactionsTable transactions={sortedRewardedTransactions} />
      </div>
    </>
  );

  return (
    <RewardsDashboardContext.Provider value={tierActions}>
      <div className="flex flex-col min-h-screen sm:px-2 md:px-5 lg:max-w-5xl mx-auto">
        <div>
          <h1>Customer Rewards Calculator</h1>
          <RewardTiersDrawer tiers={tiers} />
        </div>
        <main className="flex flex-col flex-1 justify-around">
          {
            loading ? loadingTemplate : contentTemplate
          }
        </main>
        <Toaster position="top-center" />
      </div>
    </RewardsDashboardContext.Provider>
  )
}

export default App
