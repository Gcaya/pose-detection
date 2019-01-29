let recordButton = document.getElementById('recordButton');

  chrome.storage.sync.get('color', function(data) {
    recordButton.style.backgroundColor = data.color;
    recordButton.setAttribute('value', data.color);
  });

  recordButton.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };