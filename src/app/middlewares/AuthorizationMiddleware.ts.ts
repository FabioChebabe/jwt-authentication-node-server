import { IData, IMiddleware, IResponse } from "../interfaces/IMiddleware";
import { IRequest } from "../interfaces/IRequest";
import { GetRolePermissionsUseCase } from "../useCases/GetRolePermissionsUseCase";

export class AuthorizationMiddleware implements IMiddleware {
  constructor(
    private readonly requiredPermissions: string[],
    private readonly getRolePermissionsUseCase: GetRolePermissionsUseCase,
  ) {}
  async handle({ account }: IRequest): Promise<IResponse | IData> {
    if (!account) {
      return {
        statusCode: 403,
        body: {
          error: "Access denied",
        },
      };
    }

    const permissions = await this.getRolePermissionsUseCase.execute({
      roleId: account.role,
    });

    if (!this.requiredPermissions.includes(account.role)) {
      return {
        statusCode: 403,
        body: {
          error: "Access denied",
        },
      };
    }

    return {
      data: {},
    };
  }
}
