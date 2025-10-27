import { IController, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController {
  async handle(): Promise<IResponse> {
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
