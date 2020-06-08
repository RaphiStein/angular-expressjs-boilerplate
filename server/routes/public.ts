import { Request, Response, Router } from "express";
import { publicController } from "../controllers/public.controller";

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  publicController(request, response);
});

export { publicRouter };
