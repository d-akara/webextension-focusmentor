import * as wx from 'webextension-common'
const log = wx.makeLogger('Options')

log.log('Options loaded')

try {
    wx.sendMessageExtensionPages({ event: "page.event", content: 'message from Options' }).then(response => {
        log.log(response);
        const newImageHTMLElement = document.createElement("div");
        newImageHTMLElement.innerText = response as Object as string
        document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    }).catch(reason => {
        log.log(JSON.stringify(reason))
    });

    wx.sendMessageTabs({}, { event: "popup.event", content: 'message from options' }).then(response => {
        response.filter( r => !r.isError ).forEach( r => log.log('promise all response', r))
    }).catch(reason => {
        log.log('handle error', JSON.stringify(reason))
    });

} catch (error) {
    console.log(error)
    log.log(error.toString())
}