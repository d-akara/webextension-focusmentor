import * as WebExtensions from '../node_modules/webextension-common/src/WebExtensions'

console.log('Background loaded')

WebExtensions.subscribeKeyCommandEvents((command)=>{
    console.log("command:", command)
    WebExtensions.createWindow('src/Popup.html').then(window=>console.log('created', window))
});

WebExtensions.subscribeMessages('page.event', (e)=> {
    console.log('message received', e)
    return 'response from background'
})

WebExtensions.listenContentLoaded((event:WebExtensions.EventSource)=> {
    console.log('loaded event: ',event);
})