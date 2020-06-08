import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import { Request } from "express";
import * as path from "path";
import { publicRouter } from "./routes/public";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

app.use((req: Request, res, next) => {
  console.log("[REQUEST]", req.method, req.originalUrl);
  next();
});

// api routes
app.use("/api/public", publicRouter);

// in production mode run application from dist folder
const frontendPath = path.join(__dirname, "../client");
app.use(express.static(frontendPath));
app.use((req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(frontendPath + "/index.html"));
});

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.json({
      error: {},
      message: err.message,
    });
  }
);

export { app };
