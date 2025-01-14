export interface TripFormData {
  destination: string;
  dates: string;
  budget: string;
}

export interface Activity {
  title: string;
  description: string;
  time: string;
  cost_estimate: number;
}

export interface DayPlan {
  date: string;
  activities: Activity[];
}

export interface BackendItinerary {
  destination: string;
  start_date: string;
  end_date: string;
  budget_level: string;
  daily_plans: DayPlan[];
  total_cost_estimate: number;
}

export interface Itinerary {
  destination: string;
  days: Array<{
    activities: string;
  }>;
}