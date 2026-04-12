import { useContext } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RewardTierCard } from "@/components/reward-tier-card";
import { AddTierForm } from "@/components/add-tier-form";
import { RewardsStateContext } from "@/contexts/rewards-context";

export function RewardTiersDrawer() {
  const { tiers } = useContext(RewardsStateContext);

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Reward Tiers</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Reward Tiers</DrawerTitle>
          <DrawerDescription>Add a tier</DrawerDescription>
          <AddTierForm />
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          {
            tiers.map(t => (
                <div key={t.id} className="my-3">
                  <RewardTierCard tier={t} />
                </div>
            ))
          }
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
