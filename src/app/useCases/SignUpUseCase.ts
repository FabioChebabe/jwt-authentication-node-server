import { hash } from "bcryptjs";
import { AccountAlreadyExists } from "../errors/AccountAlreadyExists";
import { prismaClient } from "../libs/prismaClient";

interface IInput {
  name: string;
  email: string;
  password: string;
  roleId: string;
}

type IOutput = void;

export class SignUpUseCase {
  async execute({ email, name, password, roleId }: IInput): Promise<IOutput> {
    const accountAlreadyExist = await prismaClient.account.findUnique({
      where: {
        email,
      },
    });

    if (accountAlreadyExist) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, 8);

    await prismaClient.account.create({
      data: {
        email,
        name,
        password: hashedPassword,
        roleId,
      },
    });
  }
}
