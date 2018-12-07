import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('devtools-panel')

try {
    log.log('loaded')
    WebExtensions.sendMessageExtensionPages({ event: "page.event", content: 'message from Devtols Panel' }).then((response) => {
        log.log(response);
        const newImageHTMLElement = document.createElement("div");
        newImageHTMLElement.innerText = response as Object as string
        document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    });

    WebExtensions.subscribeMessages("page.event", m => log.log('devtools received', m))

    WebExtensions.sendMessageActiveTab({ event: "popup.event", content: 'message from devtools' }).then((response) => {
        log.log(response)
    });
} catch (error) {
    console.log(error)
    log.log(error.toString())
}