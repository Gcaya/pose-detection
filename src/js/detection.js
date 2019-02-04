
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({color: '#3aa757'}, function() {
//       console.log("The color is green.");
//     });
//   });

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'segment_video') {
        
        
        const net = posenet.load();


        // await posenet.load().then(function(net) {
        //     return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
        // })

        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse('On est passe ici on dirait');
    }
});