import { compare, hash } from "bcrypt";
import { getUserById, updateUser } from "../../db/user";
import { userTransformer } from "../../transfomers/user";
import { User } from "../../types/user.types";
import { generateTokens } from "../../ultis/jwt";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const { password, newPassword } = body;
  const userId = e.context?.auth?.user?.id;
  const user = await getUserById(userId);
  const doesThePasswordMatch = await compare(password, user.password);
  if (!doesThePasswordMatch) {
    return sendError(
      e,
      createError({
        statusCode: 400,
        statusMessage: "Password is invalid",
      })
    );
  } 
  const newUser:User = await updateUser(userId, { password: await hash(newPassword, 10) });
  console.log(newUser);
  const { accessToken} = generateTokens(user);
  return {
    access_token : accessToken,
    user: userTransformer(newUser),
  };
});
