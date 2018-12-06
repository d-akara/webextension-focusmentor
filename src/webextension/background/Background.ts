import * as WebExtensions from 'webextension-common'
WebExtensions.background.makeBackgroundLogReceiver()
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
