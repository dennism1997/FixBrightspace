function changeToFullScreen(url) {
    var newUrl = url.replace("viewContent", "fullscreen");
    chrome.tabs.update(undefined, {url: newUrl});
}


chrome.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        if (sender.tab.url.includes("viewContent")) {
            changeToFullScreen(sender.tab.url);
        }
    });

