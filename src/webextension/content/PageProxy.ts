// import * as WebExtensions from '../../node_modules/webextension-common/src/WebExtensions'
import * as wx from 'webextension-common'

const log = wx.makeLogger('PageProxy')
log.log("loaded");

wx.subscribeMessages('toolbar.event', (a,b)=>{
    log.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

wx.subscribeMessages('popup.event', (a,b)=>{
    log.log('page include received: ', a, b)
    console.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

wx.sendMessageExtensionPages({event:'page.event', content:'message from PageProxy'}).then(reply=>log.log(reply))


wx.keyChordEventListener([wx.KeySpecial.Shift, wx.KeySpecial.Enter], ()=>log.log('all keys down'))

wx.keySequenceEventListener([wx.KeySpecial.Shift, wx.KeySpecial.Control], ()=>log.log('sequence'))
wx.keySequenceEventListener(['c', 'h', 'a', 'd'], ()=>log.log('easter egg'))

wx.storage.memSet({data1: {type: 'testing'}})
.then(() => wx.storage.memGet('data1').then(value => console.log(value)))
