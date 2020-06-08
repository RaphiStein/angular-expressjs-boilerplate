import { Request, Response } from "express";
import { IGreeting } from "../../common/app.interface";

export function publicController(request: Request, response: Response) {
  return response.json({
    text: "This came from the server",
    title: "Hello Angular.",
  } as IGreeting);
}
