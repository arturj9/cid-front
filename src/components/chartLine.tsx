"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
  { hora: "6h", desktop: 17, mobile: 17 },
  { hora: "9h", desktop: 21, mobile: 21 },
  { hora: "12h", desktop: 36, mobile: 34 },
  { hora: "15h", desktop: 30, mobile: 30 },
  { hora: "18h", desktop: 24, mobile: 24 },
  { hora: "21h", desktop: 18, mobile: 18 },
];

const chartConfig = {
  desktop: {
    label: "Temperatura",
    color: "var(--chart-5)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartLineDots() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperatura ao longo do dia</CardTitle>
        <CardDescription>De 6h às 21h do dia</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className=" py-5">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="hora"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
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
        <div className="flex gap-2 leading-none font-medium">
          Registro da temperatura ao longo do dia{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Resultados com base nas últimas leituras
        </div>
      </CardFooter>
    </Card>
  );
}
