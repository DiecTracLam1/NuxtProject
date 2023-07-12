import { getOrderList } from "../../db/order";
import { getUserById } from "../../db/user";
import { User } from "../../types/user.types";
import { decodeAccessToken } from "../../ultis/jwt";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { status = "1" } = query;
  const tamp: any = {};
  if (status !== "1") {
    tamp.status = status;
  }
  
  // const user = await getUserById("649119ba0bf2adb885a7b108");
  const user = event.context.auth?.user
  const order = await getOrderList(user, tamp);
  return { data: order };
});
