import * as WebExtensions from '../node_modules/webextension-common/src/WebExtensions'
console.log("PageProxy loaded");

WebExtensions.subscribeMessages('toolbar.event', (a,b)=>{
    console.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

WebExtensions.subscribeMessages('popup.event', (a,b)=>{
    console.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

WebExtensions.sendMessage({event:'page.event', content:'message from PageProxy'}).then(reply=>console.log(reply))


WebExtensions.keyChordEventListener([WebExtensions.KeySpecial.Shift, WebExtensions.KeySpecial.Enter], ()=>console.log('all keys down'))

WebExtensions.keySequenceEventListener([WebExtensions.KeySpecial.Shift, WebExtensions.KeySpecial.Control], ()=>console.log('sequence'))
WebExtensions.keySequenceEventListener(['c', 'h', 'a', 'd'], ()=>console.log('easter egg'))


