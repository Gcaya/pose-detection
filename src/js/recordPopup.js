let recordButton = document.getElementById('recordButton');

  recordButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: "capture_video", data: tabs[0].url});
    });
  };  

