import { AuthorizationMiddleware } from "../app/middlewares/AuthorizationMiddleware.ts";

export function makeAuthorizationMiddleware(authorizedRoles: string[]) {
  return new AuthorizationMiddleware(authorizedRoles);
}
