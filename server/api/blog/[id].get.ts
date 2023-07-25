import { getBlogDetail, getNextBlog, getPrevBlog } from "../../db/blog";
import { getUserById } from "../../db/user";

export default defineEventHandler(async (e) => {
  const id: string | undefined = e.context.params?.id;
  const blog = await getBlogDetail({}, id || "");
  const author = await getUserById(blog?.authorId || "");

  let nextBlog: any = {};
  let prevBlog: any = {};
  
  try {
    const getApi = await getNextBlog(id || "");
    nextBlog = getApi;
  } catch (error) {}

  try {
    const getApi = await getPrevBlog(id || "");
    prevBlog = getApi;
  } catch (error) {}

  return {
    data: { blog, author, nextBlog, prevBlog },
  };
});
