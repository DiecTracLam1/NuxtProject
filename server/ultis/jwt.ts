
import {sign} from "jsonwebtoken";
import { User } from "../types/user.types"

export const generateAccessToken = (user: User) => {
  const config = useRuntimeConfig();
  return "dasd"
  // return sign({ userId: user.id }, config.jwtAccessSecret);
};

// export const decodeRefreshToken = (token: string) => {
//   const config = useRuntimeConfig();

//   try {
//     return jwt.verify(token, config.jwtRefreshSecret);
//   } catch (error) {
//     return null;
//   }
// };
