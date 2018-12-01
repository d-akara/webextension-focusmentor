import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('Options')

log.log('Options loaded')

WebExtensions.sendMessage({ event: "page.event", content: 'message from Options' }).then((response) => {
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});