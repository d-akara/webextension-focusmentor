import * as WebExtensions from '../node_modules/webextension-common/src/WebExtensions'

console.log('ExtensionUI loaded')

WebExtensions.sendMessageActiveTab({ event: "toolbar.event", content: 'message from BrowserToolbar' }).then((response) => {
    console.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});