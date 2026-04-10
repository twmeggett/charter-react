import { useContext } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RewardsDashboardContext } from "@/contexts/rewards-dashboard-context";

export function RewardTierCard({ tier }) {
  const {removeTier} = useContext(RewardsDashboardContext);
  const { id, start, mult } = tier;

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
          onClick={() => removeTier(id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
