import { AuthorizationMiddleware } from "../app/middlewares/AuthorizationMiddleware.ts";
import { makeGetRolePermissionsUseCase } from "./makeGetRolePermissionsUseCase.js";

export function makeAuthorizationMiddleware(requiredPermissions: string[]) {
  return new AuthorizationMiddleware(
    requiredPermissions,
    makeGetRolePermissionsUseCase(),
  );
}
