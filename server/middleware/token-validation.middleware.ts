import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../config";
import { AuthorizedRequest } from "../types/types";

export function validateToken(request: AuthorizedRequest, response: Response, next: NextFunction) {
  console.log('[validateToken]...')
  const token = request.headers.authorization;
  console.log('[validateToken] token: ', token);

  verify(token, secret, (tokenError) => {
    if (tokenError) {
      return response.status(403).json({
        message: "Invalid token, please Log in first",
      });
    }

    next();
  });

}
