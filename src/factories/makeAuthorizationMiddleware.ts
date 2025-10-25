import { AuthorizationMiddleware } from "../app/middlewares/AuthorizationMiddleware.ts";
import { makeGetRolePermissionsUseCase } from "./makeGetRolePermissionsUseCase.js";

export function makeAuthorizationMiddleware(authorizedRoles: string[]) {
  return new AuthorizationMiddleware(
    authorizedRoles,
    makeGetRolePermissionsUseCase(),
  );
}
