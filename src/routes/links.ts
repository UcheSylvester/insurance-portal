import React from "react";
import { ReactComponent as OverviewIcon } from "../assets/icons/overview.svg";
import { ReactComponent as PolicyIcon } from "../assets/icons/policy.svg";
import { ReactComponent as ReportIcon } from "../assets/icons/reports.svg";
import { ReactComponent as CompanyIcon } from "../assets/icons/company.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as HistoryIcon } from "../assets/icons/history.svg";

export interface ILink {
  path: string;
  label: string;
  icon: React.ElementType<any>;
}

export const basicLinks: ILink[] = [
  {
    path: "/overview",
    label: "Overview",
    icon: OverviewIcon,
  },
  {
    path: "/policy",
    label: "Policy",
    icon: PolicyIcon,
  },
  {
    path: "/",
    label: "Reports",
    icon: ReportIcon,
  },
];

export const sideLinks: ILink[] = [
  ...basicLinks,
  {
    path: "/company",
    label: "Company",
    icon: CompanyIcon,
  },
  {
    path: "/account",
    label: "Account",
    icon: AccountIcon,
  },
  {
    path: "/history",
    label: "History",
    icon: HistoryIcon,
  },
];
