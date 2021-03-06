import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import entries from "./words";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const rand = Math.floor(Math.random() * entries.length)
    const choice = entries[rand];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: choice,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

export default httpTrigger; 