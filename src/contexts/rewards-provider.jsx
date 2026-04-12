import { useReducer } from "react";

import { RewardsStateContext, RewardsDispatchContext } from "./rewards-context";
import { rewardsReducer } from "@/reducers/rewards-reducer";

export function RewardsProvider ({ children }) {
  const [state, dispatch] = useReducer(rewardsReducer, rewardsReducer({}, {}));
  return (
   <RewardsStateContext.Provider value={state}>
    <RewardsDispatchContext.Provider value={dispatch}>
      {children}
    </RewardsDispatchContext.Provider>
   </RewardsStateContext.Provider>
  )
}
