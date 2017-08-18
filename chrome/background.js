chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (!request || !request.message) {
      alert("Message to extension is not defined!");
      return;
    }

    if (Object.keys(request).length < 2)
      request.a = ""; // hack: if request has just one field, native host will crash
    
    chrome.runtime.sendNativeMessage('querix.lyciaweb.ext', request, function(msg) {
      sendResponse(msg);
    });

    return true; // keep the message channel open to the other end until sendResponse is called
  }
);