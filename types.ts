
export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
}
