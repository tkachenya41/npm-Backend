import { AuthError, DBError, ValidationError } from "./custom-error";

export const errorCode = {
  NOT_FOUND: "NOT_FOUND",
  INVALID: "INVALID",
  CONNECTION: "CONNECTION",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
} as const;

export const roles = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type Error = AuthError | DBError | ValidationError;
export type ErrorMappings = Record<string, number>;

export const dbErrorMappings: ErrorMappings = {
  [errorCode.CONNECTION]: 502,
  [errorCode.INTERNAL_SERVER_ERROR]: 500,
  [errorCode.NOT_FOUND]: 404,
} as const;

export const validationErrorMappings: ErrorMappings = {
  [errorCode.INVALID]: 400,
} as const;

export const authErrorMappings: ErrorMappings = {
  [errorCode.FORBIDDEN]: 403,
} as const;
