'use strict';
import * as posenet from '@tensorflow-models/posenet';

let canvas;
let video;
let net;
let ctx;

(function(){
    chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
        if (msg.text === 'segment_video') {
            parseVideo();
        }
    });
    
    async function parseVideo() {
        
        if (!net)
            net = await posenet.load();

        video = document.getElementsByTagName('video')[0];
        await video.play();

        video.addEventListener('timeupdate', drawFrame, false);
        canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx = canvas.getContext('2d');

    };
    
    async function drawFrame(e) {

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
        const pose = await net.estimateSinglePose(canvas, 0.50);
        console.log(pose);
    };
    
    // Might be needed for instagram
    // function triggerClick(el) {
    //     let event = document.createEvent('Events');
    //     event.initEvent('click', true, false);
    //     el.dispatchEvent(event);
    // };
})();
