import { Context } from "hono";
import { AuthError, DBError, ValidationError } from "./custom-error";
import {
  Error,
  ErrorMappings,
  authErrorMappings,
  dbErrorMappings,
  validationErrorMappings,
} from "./utils";
import { formatZodError } from "./error-formater";
import { HTTPException } from "hono/http-exception";

function handleCustomError(
  err: Error,
  c: Context,
  errorMappings: ErrorMappings
) {
  if (err instanceof HTTPException) {
    c.status(401);
    if (!err.getResponse().statusText) {
      return c.json("Missing authorization... You need to sign in");
    }
    return c.json(err.getResponse().statusText);
  }

  const errorCode = errorMappings[err.code || ""];
  if (errorCode) {
    c.status(errorCode);
  } else {
    formatZodError(err, c);
  }

  return c.json(err.message);
}

export function UniversalErrorHandler(err: Error, c: Context) {
  if (err instanceof DBError) {
    return handleCustomError(err, c, dbErrorMappings);
  } else if (err instanceof ValidationError) {
    return handleCustomError(err, c, validationErrorMappings);
  } else if (err instanceof AuthError) {
    return handleCustomError(err, c, authErrorMappings);
  } else {
    return handleCustomError(err, c, {});
  }
}
