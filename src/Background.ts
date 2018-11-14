import * as WebExtensions from '../node_modules/webextension-common/src/WebExtensions'
WebExtensions.makeBackgroundLogReceiver()
const log = WebExtensions.makeLogger('Background')

log.log('loaded')

WebExtensions.subscribeKeyCommandEvents((command)=>{
    log.log("command:", command)
    WebExtensions.createWindow('src/Popup.html').then(window=>log.log('created', window))
});

WebExtensions.subscribeMessages('page.event', (e)=> {
    log.log('message received', e)
    return 'response from background'
})

WebExtensions.listenContentLoaded((event:WebExtensions.EventSource)=> {
    log.log('loaded event: ',event);
})

log.log(browser.tabs)