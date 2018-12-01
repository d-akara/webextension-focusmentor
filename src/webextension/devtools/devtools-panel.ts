import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('devtools-panel')

log.log('loaded')
console.log('loaded')
WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from Devtols Panel' }).then((response) => {
    console.log(response)
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    log.log(document.getElementsByTagName('body')[0])
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});

WebExtensions.sendMessage({ event: "page.event", content: 'message from Devtols Panel' }).then((response) => {
    console.log(response)
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    log.log(document.getElementsByTagName('body')[0])
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});