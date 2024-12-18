import { ReactNode } from "react";

export interface Menu {
  name: string;
  route: string;
  icon: React.ElementType
  iconColor?: string;
  iconSize?: string;
}