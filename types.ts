
export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
  trend?: string;
  trendType?: 'up' | 'down';
}

export interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  icon: string;
  color: string;
}

export interface IntentCategory {
  name: string;
  count: number;
  percentage: number;
}
