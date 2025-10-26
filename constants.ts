
import { Skill, Experience, Achievement } from './types';

export const SKILLS: Skill[] = [
  { name: 'Recruitment & Talent Acquisition', level: 95 },
  { name: 'HR Policy Development', level: 90 },
  { name: 'Labor Law Compliance', level: 98 },
  { name: 'Performance Management (KPI/KRA)', level: 85 },
  { name: 'Compensation & Benefits', level: 88 },
  { name: 'HRIS / HR Analytics', level: 80 },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior HR Generalist',
    company: 'Renssoft Solutions Ltd',
    period: 'Dec 2023 – Present',
    responsibilities: [
      'Managed full-cycle recruitment processes for technical and non-technical roles.',
      'Developed and implemented updated HR policies in line with current labor laws.',
      'Administered employee benefits and compensation programs.',
      'Coordinated performance management cycles and employee training initiatives.',
    ],
  },
  {
    role: 'Sr. Officer – HR & Admin',
    company: 'Fariha Group',
    period: 'Apr 2018 – Mar 2022',
    responsibilities: [
      'Handled employee relations, addressing grievances and fostering a positive work environment.',
      'Ensured full HR compliance with local regulations and company policies.',
      'Managed payroll processing and maintained HRIS records.',
      'Oversaw daily administrative operations and facility management.',
    ],
  },
  {
    role: 'Executive – Admin & HR',
    company: 'Orr, Dignam & Co.',
    period: 'Aug 2016 – Apr 2018',
    responsibilities: [
      'Assisted in recruitment, onboarding, and orientation of new hires.',
      'Maintained personnel files and managed HR documentation.',
      'Supported senior HR staff with various projects and daily tasks.',
      'Coordinated office logistics and administrative support.',
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
    { label: 'Years Experience', value: 8, suffix: '+' },
    { label: 'Recruits Managed', value: 500, suffix: '+' },
    { label: 'Compliance Rate', value: 100, suffix: '%' },
];
