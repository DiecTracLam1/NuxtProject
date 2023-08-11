import { updateUser } from "../../db/user";
import { userTransformer } from "../../transfomers/user";
import { User } from "../../types/user.types";
import { uploadToCloudinary } from "../../ultis/cloudinary";
import { generateTokens } from "../../ultis/jwt";
import formidable from "formidable";

export default defineEventHandler(async (event) => {
  const form = formidable({});
  const userId = event.context?.auth?.user?.id;
  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err:any, fields:string, files:any) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });

  const { fields, files } = response;
  const data = JSON.parse(fields.user);
  const profileImage: any = await uploadToCloudinary(
    files["profileImage"][0].filepath
  );
  data.profileImage = profileImage?.url;
  delete data.id;
  const newUser: User = await updateUser(userId, data);
  const { accessToken, refreshToken } = generateTokens(newUser);
  return {
    access_token: accessToken,
    user: userTransformer(newUser),
  };
});
