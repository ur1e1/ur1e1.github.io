var elVideo = document.querySelector("#elVideo");

    function playVideoI() {
       elVideo.play();
    }
    
    function pauseVideoI() {
       elVideo.pause();
    }

    function stopVideoI() {
       elVideo.currentTime = 0;
       elVideo.pause();
    }
    
    function rewindVideoI() {
       elVideo.currentTime = 0;
    }

var theVideo = document.querySelector('#elVideoII');
  
  // We add listeners
  theVideo.addEventListener('play', videoPlaying, false);
  theVideo.addEventListener('ended', videoEnded, false);
  theVideo.addEventListener('timeupdate', videoTimeUpdate, false);
    
  function videoPlaying (e) {
    var status = document.querySelector('#statusI');
    status.innerHTML = 'Video is playing';
  }
  
  function videoEnded (e) {
     var status = document.querySelector('#statusI');
     status.innerHTML = 'End of the video';
  }
  
  function videoTimeUpdate (e) {
      var info = document.querySelector('#infoI');
      info.innerHTML = theVideo.currentTime;
  }


  theVideo = document.querySelector("#elVideoIII");
    info = document.querySelector("#info");
    var videos = ['movie_clip', 'movie_clip2', 'movie_clip3'];
    var current = 0;

    function playVideo() {
        // The simplest way:
        //theVideo.src = videos[current] + '.mp4';
        
        // adding suppor for various formats
       theVideo.innerHTML = "";
       theVideo.innerHTML = "<source src='./videos/"+videos[current]+".mp4' type='video/mp4'>";
       theVideo.innerHTML += "<source src='./videos/"+videos[current]+".ogg' type='video/ogg'>";
       theVideo.load();
       theVideo.play();
       info.innerHTML = 'Now playing ' + videos[current];
    }
    
    function pauseVideo() {
       theVideo.pause();
       info.innerHTML = videos[current] + ' paused';
    }

    function previous() {
        if (current > 0) {
            current--;
        }
        playVideo();
    }
    
    function next() {
        if (current < videos.length-1) {
            current++;
        }
        playVideo();
    }

theVideo = document.querySelector("#elVideoIV");
var zoom = 0;

function playVideo() {
   theVideo.play();
}

function pauseVideo() {
   theVideo.pause();
}

function zoomIn() {
    zoom = zoom + 0.1;
    theVideo.style.transform = 'scale('+zoom+')';
}

function zoomOut() {
    zoom = zoom - 0.1;
    //theVideo.style.transform = 'scale('+zoom+')';
}

function rotateLeft() {

}

function rotateRight() {

}




var output = document.getElementById('output');

var idx = 0;
var filters = [
  'grayscale',
  'sepia',
  'blur',
  'brightness',
  'contrast',
  'hue-rotate', 'hue-rotate2', 'hue-rotate3',
  'saturate',
  'invert',
  ''
];

function changeFilter(e) {
  var el = e.target;
  var effect = filters[idx++ % filters.length];
  if (effect) {
    el.className = effect;
  }
  // Do not propagate the event
  event.stopPropagation();    
  event.preventDefault(); 
}

output.addEventListener('click', changeFilter, false);