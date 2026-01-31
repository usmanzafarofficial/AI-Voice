
export interface CVData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  desc: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
}
