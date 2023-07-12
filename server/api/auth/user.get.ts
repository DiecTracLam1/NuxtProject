import { getUserById } from "../../db/user";
import { userTransformer } from "../../transfomers/user";
import { User } from "../../types/user.types";

export default defineEventHandler(async (e) => {
  const user: User = await getUserById("649119ba0bf2adb885a7b108");
  return {
    user: userTransformer(user),
  };
});
