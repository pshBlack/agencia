"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { ChartConfig } from "@/components/ui/chart";
import chartData from "../constants/chartData";
const chartConfig = {
  success: {
    label: "Успішні угоди",
    color: "var(--chart-2)",
  },
  comments: {
    label: "Нові коментарі",
    color: "var(--chart-4)",
  },
};

export default function ChartUI() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] min-w-9/12 max-h-[400px]"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical="false" />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="success" fill="var(--color-success)" radius={4} />
        <Bar dataKey="comments" fill="var(--color-comments)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
