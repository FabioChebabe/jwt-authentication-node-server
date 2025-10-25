import { IController } from "../../app/interfaces/IController";
import { Request, Response } from "express";

export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    const { body, statusCode } = await controller.handle({
      body: request.body,
      account: request.metadata?.account,
      headers: request.headers as Record<string, string>,
    });

    response.status(statusCode).json(body);
  };
}
