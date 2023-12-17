import { Context } from "hono";
import { AuthError, DBError, ValidationError } from "./custom-error";
import { errorCode } from "./utils";
import { formatZodError } from "./error-formater";
import { HTTPException } from "hono/http-exception";

export function DBErrorHandler(err: Error, c: Context) {
  if (err instanceof DBError) {
    switch (err.code) {
      case errorCode.CONNECTION: {
        c.status(502);
        break;
      }
      case errorCode.INTERNAL_SERVER_ERROR: {
        c.status(500);
        break;
      }
      case errorCode.NOT_FOUND: {
        c.status(404);
        break;
      }
    }
  } else if (err) {
    formatZodError(err, c);
  }

  return c.json(err.message);
}

export function ValidationErrorHandler(err: Error, c: Context) {
  if (err instanceof ValidationError) {
    switch (err.code) {
      case errorCode.INVALID: {
        c.status(400);
        break;
      }
    }
  } else {
    formatZodError(err, c);
  }

  return c.json(err.message);
}

export function AuthErrorHandler(err: Error, c: Context) {
  if (err instanceof AuthError) {
    switch (err.code) {
      case errorCode.FORBIDDEN: {
        c.status(403);
        break;
      }
    }
  } else if (err instanceof HTTPException) {
    if (!err.getResponse().statusText) {
      c.status(401);
      return c.json("Missing authorization... You need to sign in");
    }
    return c.json(err.getResponse().statusText);
  } else {
    formatZodError(err, c);
  }

  return c.json(err.message);
}
