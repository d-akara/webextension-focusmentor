import * as WebExtensions from '../../node_modules/webextension-common/src/WebExtensions'
const log = WebExtensions.makeLogger('PopUp')

log.log('Popup loaded')

WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from Popup' }).then((response) => {
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});