import * as wx from 'webextension-common'
wx.background.startLogReceiver()
wx.background.startMemoryStorage()
wx.background.startMessageProxy()
const log = wx.makeLogger('Background')

log.log('loaded')

wx.subscribeKeyCommandEvents((command)=>{
    log.log("command:", command)
    wx.createWindow('src/webextension/Popup.html').then(window=>log.log('created', window))
});

wx.subscribeMessages('page.event', (e)=> {
    log.log('message received', e)
    return 'response from background'
})

wx.onBrowserAction(action => {
    wx.createWindow('src/webextension/Popup.html')
})

wx.listenContentLoaded((event:wx.EventSource)=> {
    log.log('loaded event: ',event);
})

wx.storage.memSet({test: 'value1'})
log.log(wx.storage.memGet('test'))
