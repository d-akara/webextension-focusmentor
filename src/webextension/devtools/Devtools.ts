import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('Devtools')

log.log('Devtools loaded')

WebExtensions.devtools.createPanel("Devtools WebExtension", "/icons/access-point-network.png", "/src/webextension/devtools/devtools-panel.html")

WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from Devtols' }).then((response) => {
    console.log(response)
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});