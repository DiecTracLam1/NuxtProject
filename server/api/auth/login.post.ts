import { getUserByUsername } from "../../db/user.js";
import { compare } from "bcrypt";
import { userTransformer } from "../../transfomers/user";
import { generateTokens, sendRefreshToken } from "../../ultis/jwt";
import { sendError } from "h3";
import { User } from "../../types/user.types.js";
import { createRefreshToken } from "../../db/refreshToken.js";

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

  const user: User = await getUserByUsername(username);

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

  const { accessToken, refreshToken } = generateTokens(user);

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
