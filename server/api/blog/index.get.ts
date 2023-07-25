import { getBlogs } from "../../db/blog";

export default defineEventHandler(async (e) => {
  const query = getQuery(e);
  const { _offset = 0, _limit = 3 } = query;
  const blogs = await getBlogs({ skip: Number(_offset), take: Number(_limit) });
  return {
    data: blogs,
  };
});
