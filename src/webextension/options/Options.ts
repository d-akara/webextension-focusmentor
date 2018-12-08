import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('Options')

log.log('Options loaded')

try {
    WebExtensions.sendMessageExtensionPages({ event: "page.event", content: 'message from Options' }).then((response) => {
        log.log(response);
        const newImageHTMLElement = document.createElement("div");
        newImageHTMLElement.innerText = response as Object as string
        document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    }).catch(reason => {
        log.log(JSON.stringify(reason))
    });

    WebExtensions.sendMessageTabs({}, { event: "popup.event", content: 'message from options' }).then((response) => {
        log.log('promise all response', response)
    }).catch(reason => {
        log.log('handle error', JSON.stringify(reason))
    });

} catch (error) {
    console.log(error)
    log.log(error.toString())
}