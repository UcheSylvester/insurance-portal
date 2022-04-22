export interface Metric {
  id: number;
  percentage: number;
  amount: number;
  name: string;
}

export interface Report {
  id: number;
  value: number;
  currency: string;
  name: string;
  metrics: Metric[];
}

export const REPORT_DATA: Report[] = [
  {
    id: 1,
    value: 1000,
    currency: "$",
    name: "Total Value of Disbursement",
    metrics: [
      {
        id: 1,
        name: "Policy",
        amount: 400,
        percentage: 40,
      },
      {
        id: 2,
        name: "Claims",
        amount: 800,
        percentage: 70,
      },
    ],
  },

  {
    id: 2,
    value: 2500,
    currency: "$",
    name: "Total Value of Disbursement",
    metrics: [
      {
        id: 1,
        name: "Policy",
        amount: 1100,
        percentage: 60,
      },
      {
        id: 2,
        name: "Claims",
        amount: 1400,
        percentage: 70,
      },
    ],
  },

  {
    id: 3,
    value: 2500,
    currency: "$",
    name: "Total Value of Disbursement",
    metrics: [
      {
        id: 1,
        name: "Policy",
        amount: 1100,
        percentage: 60,
      },
      {
        id: 2,
        name: "Claims",
        amount: 1400,
        percentage: 70,
      },
    ],
  },
];

export const SLIDER_COLOR: Record<string, string> = {
  Policy: "var(--color-primary)",
  Claims: "var(--color-tertiary)",
};
