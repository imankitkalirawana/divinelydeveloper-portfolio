interface Base {
  _id: string;
  addedBy?: string;
  modifiedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User extends Base {
  email: string;
  phone: string;
  password: string;
  name: string;
  role: "admin" | "user";
  status: "active" | "banned" | "deleted";
  src: string;
}

export interface Project extends Base {
  title: string;
  tagline: string;
  description: string;
  role: string;
  github: string;
  thumbnail: {
    src: string;
    file: File;
    preview: string;
  };
  technologies: string[];
  previewlink: string;
  startdate: string;
  enddate: string;
  status: "upcoming" | "in-progress" | "on-hold" | "completed";
  slug: string;
  client: string;
  priority: number;
}

export interface Testimonial extends Base {
  _id: string;
  name: string;
  title: string;
  src: string;
  comment: string;
  projects?: string[];
}

export interface Social extends Base {
  name: string;
  icon?: string;
  url: string;
  color: string;
  priority: number;
  category: "social" | "resource" | "byme" | "other" | "featured";
}

export interface ChatHistory {
  id?: string;
  role: "user" | "model" | "system";
  parts: { text: string }[];
}
