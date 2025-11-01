import React from 'react';

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
}

export interface Project {
    icon: React.FC<{className?: string}>;
    title: string;
    description: string;
}
