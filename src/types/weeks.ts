export interface Topic {
  id: number;
  name: string;
  description: string;
}

export interface Week {
  id: number;
  name: string;
  date: string;
  topic?: Topic[];
}

export type Weeks = Week[];
