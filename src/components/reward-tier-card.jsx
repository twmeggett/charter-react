import { useContext } from "react";

import { RewardsDispatchContext } from "@/contexts/rewards-context";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { removeTier } from "@/reducers/rewards-reducer";

export function RewardTierCard({ tier: { id, start, mult } }) {
  const dispatch = useContext(RewardsDispatchContext);

  const handleRemoveTier = () => {
    dispatch(removeTier(id));
  }

  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Start: {start}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Multiplier: {mult}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() => handleRemoveTier(id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
