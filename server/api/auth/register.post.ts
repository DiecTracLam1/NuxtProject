import { sendError } from "h3";
import { createUser } from "../../db/user.js";
import { userTransformer } from "../../transfomers/user";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, password, repeatPassword, name , phone } = body;

  if (!username || !email || !password || !repeatPassword || !name || !phone) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    phone,
    profileImage: "https://picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});