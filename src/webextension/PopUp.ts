import * as wx from 'webextension-common'
const log = wx.makeLogger('PopUp')

log.log('Popup loaded')

wx.sendMessageActiveTab({ event: "popup.event", content: 'message from Popup' }).then((response) => {
    log.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
});