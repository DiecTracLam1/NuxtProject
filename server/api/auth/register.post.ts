import { sendError } from "h3";
import { createUser, getUserByUsername } from "../../db/user.js";
import { userTransformer } from "../../transfomers/user";
import { User } from "../../types/user.types.js";
import { generateTokens, sendRefreshToken } from "../../ultis/jwt.js";
import { createRefreshToken } from "../../db/refreshToken.js";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password, repeatPassword, phoneNumber } = body;

  if (!username || !password || !repeatPassword || !phoneNumber) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  const userAccount: User = await getUserByUsername(username);
  if (userAccount) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Account was existed" })
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
    password,
    phoneNumber: phoneNumber.toString(),
    profileImage: "https://picsum.photos/200/200",
  };

  const user: User = await createUser(userData);
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
