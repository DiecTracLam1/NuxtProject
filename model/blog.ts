import { User } from "./user";

interface Blog {
  id: string;
  title: string;
  titleImage: string;
  createdAt: Date;
  updatedAt: Date;
  description: Description[];
}
type Description = {
  type: string;
  content: string;
};

export interface BlogApi {
  data: Blog[];
}

export interface BlogDetailApi {
  data: { blog: Blog; author: User };
}
