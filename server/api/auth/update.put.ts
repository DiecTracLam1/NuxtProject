import { updateUser } from "../../db/user";
import { userTransformer } from "../../transfomers/user";
import { User } from "../../types/user.types";
import { uploadToCloudinary } from "../../ultis/cloudinary";
import { generateTokens } from "../../ultis/jwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = body.values;
  const userId = event.context?.auth?.user?.id;
  const profileImage = await uploadToCloudinary(data.profileImage);
  data.profileImage = profileImage?.url;
  delete data.id;
  const newUser: User = await updateUser(userId, data);
  const { accessToken, refreshToken } = generateTokens(newUser);
  return {
    access_token: accessToken,
    user: userTransformer(newUser),
  };
});
