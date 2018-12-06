import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('Options')

log.log('Options loaded')

try {
    WebExtensions.sendMessage({ event: "page.event", content: 'message from Options' }).then((response) => {
        log.log(response);
        const newImageHTMLElement = document.createElement("div");
        newImageHTMLElement.innerText = response as Object as string
        document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    });

    WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from options' }).then((response) => {
        log.log(response)
    }).catch(reason => {
        log.log(JSON.stringify(reason))
    });

} catch (error) {
    console.log(error)
    log.log(error.toString())
}