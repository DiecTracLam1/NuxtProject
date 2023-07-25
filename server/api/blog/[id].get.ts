import { getBlogDetail } from "../../db/blog";
import { getUserById } from "../../db/user";

export default defineEventHandler(async (e) => {
  const id: string | undefined = e.context.params?.id;
  const blog = await getBlogDetail({}, id || "");
  const author = await getUserById(blog?.authorId || "");
  return {
    data: { blog, author },
  };
});
