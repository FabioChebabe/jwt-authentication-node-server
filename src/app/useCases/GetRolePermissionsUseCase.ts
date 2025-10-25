import { prismaClient } from "../libs/prismaClient";

interface IInput {
  roleId: string;
}

interface IOutput {
  permissionsCode: string[];
}

export class GetRolePermissionsUseCase {
  async execute({ roleId }: IInput): Promise<IOutput> {
    const rolePermissions = await prismaClient.rolePermission.findMany({
      where: {
        roleId,
      },
      select: {
        permissionCode: true,
      },
    });

    const permissionsCode = rolePermissions.map(
      (rolePermission) => rolePermission.permissionCode,
    );

    return { permissionsCode };
  }
}
