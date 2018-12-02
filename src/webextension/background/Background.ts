import * as WebExtensions from 'webextension-common'
WebExtensions.background.startMessageBus()
WebExtensions.makeBackgroundLogReceiver()
const log = WebExtensions.makeLogger('Background')

log.log('loaded')

WebExtensions.subscribeKeyCommandEvents((command)=>{
    log.log("command:", command)
    WebExtensions.createWindow('src/webextension/Popup.html').then(window=>log.log('created', window))
});

WebExtensions.subscribeMessages('page.event', (e)=> {
    log.log('message received', e)
    return 'response from background'
})

WebExtensions.onBrowserAction(action => {
    WebExtensions.createWindow('src/webextension/Popup.html')
})

WebExtensions.listenContentLoaded((event:WebExtensions.EventSource)=> {
    log.log('loaded event: ',event);
})

WebExtensions.createMessageBusConnection('test', (msg, from, sender, sendResponse) => {
    log.log('bus message received, sending response', msg)
    sendResponse({'received': msg})
})