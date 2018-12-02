import * as WebExtensions from 'webextension-common'
const log = WebExtensions.makeLogger('devtools-panel')

try {
    log.log('logger loaded')
    console.log('loaded')
    
    const connection = WebExtensions.createMessageBusConnection('test', message => {log.log('bus message received', message)})
    connection.sendMessage('background', 'test', {type: 'hello from devtools'}).then(response => {
        log.log('devtools received response', response)
        const newImageHTMLElement = document.createElement("div");
        newImageHTMLElement.innerText = response.received.type as Object as string
        log.log(document.getElementsByTagName('body')[0])
        document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    });
} catch (error) {
    console.log(error)
    log.log(error.toString())
}