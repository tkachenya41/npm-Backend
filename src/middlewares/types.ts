import { validateSign } from "./authValidation";
import { validatePostBody, validateUpdatePostBody } from "./postValidations";
import {
  validateUpdateUserBody,
  validateUserBody,
  validateUserId,
} from "./userValidation";

export type UserBodyValidation = typeof validateUserBody;
export type UserBodyContext = Parameters<UserBodyValidation>[0];

export type UpdateUserBodyValidation = typeof validateUpdateUserBody;
export type UpdateUserContext = Parameters<UpdateUserBodyValidation>[0];

export type UserIdValidation = typeof validateUserId;
export type IdContextType = Parameters<UserIdValidation>[0];

export type SignValidation = typeof validateSign;
export type SignContext = Parameters<SignValidation>[0];

export type PostBodyValidation = typeof validatePostBody;
export type PostBodyContext = Parameters<PostBodyValidation>[0];

export type UpdatePostBodyValidation = typeof validateUpdatePostBody;
export type UpdatePostContext = Parameters<UpdatePostBodyValidation>[0];
