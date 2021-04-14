import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

// deno-lint-ignore require-await
export async function handler(
  _event: APIGatewayProxyEventV2,
  _context: Context,
): Promise<APIGatewayProxyResultV2> {
  return {
    statusCode: 200,
    headers: { "content-type": "text/html;charset=utf8" },
    body: `Hello World! Sent from deno ${Deno.version.deno} 🦕`,
  };
}
