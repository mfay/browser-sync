chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // for the current tab, inject the "inject.js" file & execute it
  if (tab.status == "complete") {
    chrome.tabs.executeScript(tab.id, {
      file: "inject.js",
    });
  }
});
