import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../ultis/jwt";
import { getUserById } from "../db/user";

export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/order/*",
    "/api/order?status=1",
    "/api/order?status=2",
    "/api/order?status=3",
    "/api/order?status=4",
    "/api/order?status=5",
  ];

  const isHandledByThisMiddleware = endpoints.some((endopoint) => {
    const pattern = new UrlPattern(endopoint);
    return pattern.match(event.req.url);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }
  // console.log(event.req);
  // console.log("Author : ", event.req.headers.authorization);
  const token = event.req.headers["authorization"]?.split(" ")[1];
  const decoded = decodeAccessToken(token);
  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  try {
    const userId = decoded.userId;

    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
