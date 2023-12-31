import { validateRegistration, validateSign } from "./authValidation";
import { validatePostBody, validateUpdatePostBody } from "./postValidations";
import {
  validateUpdateUserBody,
  validateUserBody,
  validateUserId,
  validateUserName,
} from "./userValidation";

export type UserBodyValidation = typeof validateUserBody;
export type UserBodyContext = Parameters<UserBodyValidation>[0];

export type UpdateUserBodyValidation = typeof validateUpdateUserBody;
export type UpdateUserContext = Parameters<UpdateUserBodyValidation>[0];

export type UserIdValidation = typeof validateUserId;
export type IdContextType = Parameters<UserIdValidation>[0];

export type UserNameValidation = typeof validateUserName;
export type NameContextType = Parameters<UserNameValidation>[0];

export type SignValidation = typeof validateSign;
export type SignContext = Parameters<SignValidation>[0];

export type RegisterValidation = typeof validateRegistration;
export type RegisterContext = Parameters<RegisterValidation>[0];

export type PostBodyValidation = typeof validatePostBody;
export type PostBodyContext = Parameters<PostBodyValidation>[0];

export type UpdatePostBodyValidation = typeof validateUpdatePostBody;
export type UpdatePostContext = Parameters<UpdatePostBodyValidation>[0];
