import { getNextBlog, getPrevBlog } from "../../db/blog";

export default defineEventHandler(async (e) => {
  const query = getQuery(e);
  const { id } = query;
  let nextBlog: any = {};
  let prevBlog: any = {};
  try {
    const getApi = await getNextBlog(id || "");
    nextBlog = getApi
  } catch (error) {}
  try {
    const getApi = await getPrevBlog(id || "");
    prevBlog = getApi
  } catch (error) {}
  return {
    data: {
      nextBlog,
      prevBlog,
    },
  };
});
