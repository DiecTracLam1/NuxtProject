import { getOrder } from "../../db/order";
import { getUserById } from "../../db/user";
import { User } from "../../types/user.types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { status = "1" } = query;
  const headers = event.req.headers;
  const user: any = await getUserById("649119ba0bf2adb885a7b108");
  const order = await getOrder(user, status);
  return { data: order };
});
