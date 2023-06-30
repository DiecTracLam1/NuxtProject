import { getUserByUsername } from "../../db/user.js";
import { compare } from "bcrypt";
import { userTransformer } from "../../transfomers/user";
import { generateAccessToken } from "../../ultis/jwt";
import { sendError } from "h3";
import { User } from "../../types/user.types.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;
  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Ivalid params",
      })
    );
  }

  const user:any = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  const doesThePasswordMatch = await compare(password, user.password);

  if (!doesThePasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  const accessToken= generateAccessToken(user);

  return {
    access_token: accessToken,
    user : userTransformer(user)
  };
});
