"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const mychartData = [
  {"source": "OPEC", "count": 43},
  {"source": "Bloomberg Business", "count": 36},
  {"source": "DOE EIA 2013 Energy Conference", "count": 35},
  {"source": "CNNMoney", "count": 22},
  {"source": "Resilience", "count": 21},
  {"source": "World Bank Group", "count": 19},
  {"source": "Europa", "count": 18},
  {"source": "World Bank", "count": 15}
]

const chartConfig = {
  desktop: {
    label: "count",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export function Sourceline() {
  return (
    <Card className="w-[400px] h-[400px]">
      <CardHeader>
        <CardTitle> No. of Papers - Sources</CardTitle>
        <CardDescription>2007 - 2020</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={mychartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="source"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              aria-multiline={true}
            tickFormatter={(value) => value.toString().substring(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="count"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
         Sources : OPEC, Bloomberg Business, DOE EIA 2013 Energy Conference, CNNMoney, Resilience, World Bank Group, Europa, World Bank
        </div>
      </CardFooter>
    </Card>
  )
}
