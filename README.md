# italian_api
a silly little api to quiz me on Italian words.  Feeds my small [widgetkit widget](https://github.com/joshspicer/widgetkit-daily-italian).

# Deploy

The easiest way to deploy yourself will be to clone and open the project in VS Code with the [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) installed.  From there, you can provision and deploy the code.  Simple visit the (authenticated) endpoint to get a JSON result of the form:

```json
{
  "english": "justice",
  "italian": "giustizia"
}
```
The wordlist can be [found here](https://github.com/joshspicer/italian_api/blob/main/ItalianAPI/words.ts), courtesy of [this repo](https://github.com/JacobU/italian-training).
