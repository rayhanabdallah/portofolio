export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  duration: string;
  description: string;
  credentialId: string;
  type: 'certificate' | 'attendance';
  certificateImage?: string;
}

export const certifications: Certification[] = [
  {
    id: 'ibm-ai-agent',
    title: 'IT - AI Agent for Programming',
    organization: 'IBM SkillsBuild University Education program (Hosted by Hacktiv8 Indonesia)',
    issueDate: '01 September 2026',
    duration: '9 hours',
    description: 'Comprehensive program on AI agents for programming. Final project successfully delivered.',
    credentialId: '12319/H8/CSR/ISUE/V/2026',
    type: 'certificate',
    certificateImage: './images/certificates/ibm-ai-agent.png',
  },
  {
    id: 'revou-software-engineering',
    title: 'Intro to Software Engineering',
    organization: 'RevoU Coding Camp',
    issueDate: '28 August 2026',
    duration: '1-week certified online course',
    description: 'Certificate of Attendance for Introduction to Software Engineering',
    credentialId: 'CCSE-240826-01-1-00044',
    type: 'attendance',
    certificateImage: './images/certificates/revou-software-engineering.png',
  },
];
