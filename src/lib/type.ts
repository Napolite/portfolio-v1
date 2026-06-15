export type SocialLink = {
  label: string;
  href: string;
  value: string | React.ReactNode;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  href: string;
  summary: string;
  label: string;
};
