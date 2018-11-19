import * as WebExtensions from '../../node_modules/webextension-common/src/WebExtensions'
const log = WebExtensions.makeLogger('Devtools')

log.log('Devtools loaded')

WebExtensions.devtools.createPanel("Devtools WebExtension", "icons/access-point-network.png", "src/webextension/devtools-panel.html")

WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from Devtols' }).then((response) => {
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});