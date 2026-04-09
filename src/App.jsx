import RewardBreaksDrawer from '@components/RewardBreaksDrawer';
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";

import RewardsGraph from "./components/RewardsGraph";
import TransactionsTable from "./components/TransactionsTable";
import { useRewardsDashboard } from "./hooks/useRewardsDashboard";

function App() {
  const { 
    breaks,
    setBreaks,
    loading,
    sortedRewardedTransactions,
    qtrTotals 
  } = useRewardsDashboard();
  
  const loadingTemplate = (
    <div className="flex flex-1 justify-center items-center">
      <Spinner position="center" />
    </div>
  );

  const contentTemplate = (
    <>
      <RewardsGraph qtrTotals={qtrTotals} />
      <TransactionsTable transactions={sortedRewardedTransactions} />
    </>
  );

  return (
    <div className="flex flex-col min-h-screen lg:px-40 md:px-4 sm:px-2">
      <div>
        <h1>Customer Rewards Calculator</h1>
        <RewardBreaksDrawer breaks={breaks} setBreaks={setBreaks} />
      </div>
      <main className="flex flex-col flex-1 justify-around">
        {
          loading ? loadingTemplate : contentTemplate
        }
      </main>
      <Toaster position="top-center" />
    </div>
  )
}

export default App
