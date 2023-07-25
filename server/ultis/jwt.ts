import jwt from "jsonwebtoken";

import { User } from "../types/user.types";

export const generateAccessToken = (user: User) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id , role : user.role }, config.jwtAccessSecret, {
    expiresIn: "2h",
  });
};

const generateRefreshToken = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id , role : user.role }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const decodeAccessToken = (token: string) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch (error) {
    return null;
  }
};

export const generateTokens = (user: User) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event: any, token: string) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
