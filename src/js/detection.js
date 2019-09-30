'use strict';

(function(){
    chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
        if (msg.text === 'capture_video') {
            fetch('http://localhost:3003/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({url: msg.data})
            });
        }
    });
})();
