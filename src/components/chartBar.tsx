"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { Measurement } from "@/services/api/measurement";

export const description = "A multiple bar chart";

const chartData = [
  { month: "A-1", desktop: 186, mobile: 80 },
  { month: "A-2", desktop: 305, mobile: 200 },
  { month: "A-3", desktop: 237, mobile: 120 },
  { month: "B-1", desktop: 73, mobile: 190 },
  { month: "B-2", desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: "Umidade do Solo: ",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Umidade do Ar: ",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartBarMultiple({ data }: { data: Measurement[] }) {
  console.log(data)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Umidade do Solo e do Ar</CardTitle>
        <CardDescription>Umidade por Setor</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Níveis de umidade do solo e do ar <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Resultados com base nas últimas leituras
        </div>
      </CardFooter>
    </Card>
  );
}
