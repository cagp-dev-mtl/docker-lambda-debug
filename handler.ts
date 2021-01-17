import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

export const respond = (fulfillmentText: any, statusCode: number): any => {
  return {
    statusCode,
    body: JSON.stringify(fulfillmentText),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
};

export const getLambdaInfo: Handler = async (
    event: APIGatewayEvent,
    context: Context
) => {
  return respond( { response : 'success' }, 200 );
}
