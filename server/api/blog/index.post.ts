import { createBlog } from "../../db/blog";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const { title, titleImage, description, authorId } = body;
  // const userId = event.context?.auth?.user?.id;
  // const role = event.context?.auth?.user?.role;
  // if (role !== "admin") {
  //   return sendError(
  //     e,
  //     createError({
  //       statusCode: 400,
  //       statusMessage: "Permissions access failed",
  //     })
  //   );
  // }

  const add = await createBlog({ title, titleImage, description, authorId });
  return {
    data: "success",
  };
});
