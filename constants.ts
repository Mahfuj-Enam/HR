import { Skill, Experience, Achievement, Project } from './types';
import React from 'react';

// Icons for Projects
// FIX: Replaced JSX with React.createElement to be compatible with .ts file extension.
const SystemIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }))
);
// FIX: Replaced JSX with React.createElement to be compatible with .ts file extension.
const ChartIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }))
);
// FIX: Replaced JSX with React.createElement to be compatible with .ts file extension.
const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a3.001 3.001 0 015.688 0M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
    }))
);
// FIX: Replaced JSX with React.createElement to be compatible with .ts file extension.
const ShieldIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }))
);


export const SKILLS_CATEGORIZED: { [key: string]: Skill[] } = {
  "Core HR": [
    { name: 'Recruitment & Talent Acquisition', level: 95 },
    { name: 'HR Policy Development & Implementation', level: 90 },
    { name: 'Performance Management (KPI/KRA)', level: 85 },
    { name: 'Compensation & Benefits', level: 88 },
  ],
  "Compliance & Administration": [
    { name: 'Labor Law Compliance', level: 98 },
    { name: 'Employee Relations & Grievance Handling', level: 92 },
    { name: 'Facility & Office Administration', level: 85 },
  ],
  "HR Technology & Soft Skills": [
    { name: 'HRIS / HR Analytics', level: 80 },
    { name: 'Microsoft Office Suite (Advanced)', level: 95 },
    { name: 'Leadership & Team Management', level: 90 },
  ]
};

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
    achievements: [
        'Reduced recruitment turnaround by 30% through optimized sourcing channels.',
        'Successfully implemented a new digital attendance and leave management system.'
    ]
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
    achievements: [
        'Improved employee retention by 15% by introducing new engagement initiatives.',
        'Achieved 100% compliance during multiple external labor law audits.'
    ]
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
    achievements: [
        'Streamlined the new-hire onboarding process, reducing paperwork by 40%.',
        'Organized and executed the company’s first formal performance review cycle.'
    ]
  },
];

export const PROJECTS: Project[] = [
    {
        icon: SystemIcon,
        title: 'HRIS Implementation',
        description: 'Led the successful migration to a new HRIS, automating attendance, leave, and payroll processes, which increased HR operational efficiency by 25%.'
    },
    {
        icon: ChartIcon,
        title: 'KPI-based Performance System',
        description: 'Designed and launched a company-wide KPI-based performance evaluation framework, aligning individual goals with strategic business objectives.'
    },
    {
        icon: UsersIcon,
        title: 'Employee Engagement Program',
        description: 'Developed and executed a series of engagement initiatives and wellness programs, resulting in a 15% improvement in annual employee satisfaction scores.'
    },
    {
        icon: ShieldIcon,
        title: 'Labor Law Compliance Audit',
        description: 'Conducted a comprehensive internal audit of all HR practices against Bangladesh Labor Law, ensuring 100% compliance and mitigating legal risks.'
    }
];

export const ACHIEVEMENTS: Achievement[] = [
    { label: 'Years Experience', value: 7, suffix: '+' },
    { label: 'Recruits Managed', value: 500, suffix: '+' },
    { label: 'Compliance Rate', value: 100, suffix: '%' },
];

// Deprecated, use SKILLS_CATEGORIZED instead
export const SKILLS: Skill[] = [];
