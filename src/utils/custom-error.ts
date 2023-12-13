export class DBError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.name = "DBError";
    this.code = code;
  }
}

export class ValidationError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.name = "ValidationError";
    this.code = code;
  }
}

export class AuthError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.name = "AuthError";
    this.code = code;
  }
}
