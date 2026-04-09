import { useState, useEffect } from "react";

import RewardBreaksDrawer from '@components/RewardBreaksDrawer';
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import { defaultBreaks } from "@/const"

import { computeTotalsByMonth } from "./utils/computeTotalsByMonth";
import RewardsGraph from "./components/RewardsGraph";
import TransactionsTable from "./components/TransactionsTable";
import { useRewardAndSortTransactions } from "./hooks/useRewardAndSortTransactions";
import { useGetTransactions } from "./hooks/useGetTransactions";

function App() {
  const [breaks, setBreaks] = useState(defaultBreaks);
  const {loading, transactions} = useGetTransactions();
  const [qtrTotals, setQtrTotals] = useState({});
  const sortedRewardedTransactions = useRewardAndSortTransactions(transactions, breaks);

  useEffect(() => { // recompute totals whenever transactions or reward breaks change
    setQtrTotals(computeTotalsByMonth(sortedRewardedTransactions))
  }, [sortedRewardedTransactions])

  const loadingTemplate = (
    <div className="flex flex-1 justify-center">
      <Spinner position="center" />
    </div>
  );

  const contentTemplate = (
    <>
      <div>
        <RewardsGraph qtrTotals={qtrTotals} />
      </div>
      <div>
        <TransactionsTable transactions={sortedRewardedTransactions} />
      </div>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen lg:px-40 md:px-4 sm:px-2">
      <div className="flex-1">
        <h1>Customer Rewards</h1>
        <RewardBreaksDrawer breaks={breaks} setBreaks={setBreaks} />
      </div>
      {
        loading ? loadingTemplate : contentTemplate
      }
      <Toaster position="top-center" />
    </div>
  )
}

export default App
