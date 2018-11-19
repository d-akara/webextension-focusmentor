import * as WebExtensions from '../../node_modules/webextension-common/src/WebExtensions'
const log = WebExtensions.makeLogger('devtools-panel')

log.log('loaded')

WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from Devtols Panel' }).then((response) => {
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    log.log(document.getElementsByTagName('body')[0])
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});