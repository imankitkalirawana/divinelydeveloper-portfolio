interface Base {
  _id: string;
  addedBy: string;
  modifiedBy: string;
  createdAt: Date;
  updatedAt: Date;
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
  description: string;
  thumbnail: {
    src: string;
    file: File;
    preview: string;
  };
  technologies: string[];
  previewlink: string;
  startdate: string;
  enddate: string;
  status: "upcoming" | "in-progress" | "hold" | "completed";
  slug: string;
  client: string;
}
