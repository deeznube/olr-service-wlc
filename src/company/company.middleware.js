import Jwt from "jsonwebtoken";
import config from "../config.js";

export const validateToken = (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;

    // check headers
    if (!authHeader) {
      res.status(401).send({
        message: "unauthorized",
        cause: "authorization header not found",
      });
      return;
    }

    const [scheme, token] = authHeader.split(" ");

    const payload = Jwt.verify(token, config.app.jwtKey);

    if (!payload || scheme !== "Bearer") {
      res.status(401).send({
        message: "unauthorized",
        cause: "invalid token",
      });
      return;
    }

    next();

  } catch (error) {
    if (error.message === "jwt expired") {
      res.status(401).send({
        status: 'error',
        code: 0,
        message: "unauthorized",
        cause: "expired token",
      });
      return;
    }

    if (error.message === "invalid signature") {
      res.status(401).send({
        status: 'error',
        code: 0,
        message: "unauthorized",
        cause: "invalid token",
      });
      return;
    }

    if (error.message === "invalid token") {
      res.status(401).send({
        status: 'error',
        code: 0,
        message: "unauthorized",
        cause: "invalid token",
      });
      return;
    }

    res.status(500).send({
      status: 'error',
      code: 0,
      message: "interal error",
      cause: "unknown",
    });
  }
};
