theVideo = document.querySelector("#elVideo");

    function playVideo() {
       theVideo.play();
    }
    
    function pauseVideo() {
       theVideo.pause();
    }

    function stopVideo() {
       theVideo.currentTime = 0;
       theVideo.pause();
    }
    