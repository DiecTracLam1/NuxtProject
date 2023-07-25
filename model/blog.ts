import { User } from "./user";

interface Blog {
  id: string;
  title: string;
  titleImage: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
}

export interface BlogApi {
  data: Blog[];
}

export interface BlogDetailApi {
  data: {
    blog: Blog;
    author: User;
    nextBlog: Blog;
    prevBlog: Blog;
  };
}
