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
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const mychartData = [
    {
        "count": 1,
        "year": 2007
    },
    {
        "count": 1,
        "year": 2012
    },
    {
        "count": 10,
        "year": 2014
    },
    {
        "count": 26,
        "year": 2015
    },
    {
        "count": 780,
        "year": 2016
    },
    {
        "count": 107,
        "year": 2017
    },
    {
        "count": 1,
        "year": 2020
    }
]
const chartConfig = {
  desktop: {
    label: "count",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export function LineGraph() {
  return (
    <Card className="w-[400px] h-[350px]">
      <CardHeader>
        <CardTitle> No. of Papers - Years</CardTitle>
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
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            tickFormatter={(value) => value.toString()}
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
         Most Active year is 2016
        </div>
      </CardFooter>
    </Card>
  )
}
