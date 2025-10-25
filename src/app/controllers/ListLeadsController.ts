import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    console.log("request >>> ", request);
    return {
      statusCode: 200,
      body: {
        leads: [
          {
            id: "1",
            name: "test1",
          },
          {
            id: "2",
            name: "test2",
          },
          {
            id: "3",
            name: "test3",
          },
        ],
      },
    };
  }
}
