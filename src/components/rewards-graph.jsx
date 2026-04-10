import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

export function RewardsGraph({ customerTotals }) {
  const chartData = Object.entries(customerTotals).map(([customerId, {amount, rewards}]) => {
    return {
      customer: customerId,
      amount,
      rewards,
    }
  })

  const chartConfig = {
    amount: {
      label: "Amount",
      color: "var(--chart-1)",
    },
    rewards: {
      label: "Rewards",
      color: "var(--chart-2)",
    }
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="customer"
          tickLine={false}
          tickMargin={10}
          axisLine={true}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="amount" fill="var(--color-amount)" radius={4} />
        <Bar dataKey="rewards" fill="var(--color-rewards)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
