import { getUserById } from "../../db/user";

export default defineEventHandler(async (event) => {
  const headers = event.req.headers;
  const user = getUserById('649119ba0bf2adb885a7b108');
  return { data: "dasd" };
});
