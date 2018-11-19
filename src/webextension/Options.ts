import * as WebExtensions from '../../node_modules/webextension-common/src/WebExtensions'
const log = WebExtensions.makeLogger('Options')

log.log('Options loaded')

WebExtensions.sendMessage({ event: "page.event", content: 'message from Options' }).then((response) => {
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});