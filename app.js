const closeBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal');
const fccBtn = document.getElementById('fcc-btn');

const closeBtn2 = document.getElementById('modal-btn2');
const modal2 = document.getElementById('modal2');
const femBtn = document.getElementById('fem-btn');

const closeBtn3 = document.getElementById('modal-btn3');
const modal3 = document.getElementById('modal3');
const reactBtn = document.getElementById('react-btn');

const closeBtn4 = document.getElementById('modal-btn4');
const modal4 = document.getElementById('modal4');
const certificatesBtn = document.getElementById('certificates-btn');

const closeBtn5 = document.getElementById('modal-btn5');
const modal5 = document.getElementById('modal5');
const aboutBtn = document.getElementById('about-btn');

const closeBtn6 = document.getElementById('modal-btn6');
const modal6 = document.getElementById('modal6');
const contactBtn = document.getElementById('contact-btn');

const toolbarIcon = document.querySelectorAll('.toolbar-icon');
const startIcon = document.getElementById('start-icon');

const nowPlaying = document.querySelector(".now-playing");
const trackArt = document.querySelector(".track-art");
const trackName = document.querySelector(".track-name");
const trackArtist = document.querySelector(".track-artist");
 
const playPauseBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".next-track");
const prevBtn = document.querySelector(".prev-track");
 
const timeSlider = document.querySelector(".time-slider");
const volumeSlider = document.querySelector(".volume-slider");
const currentTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".total-duration");
const player = document.querySelector(".player");

const startBtn = document.getElementById('start-btn');
const startTab = document.getElementById('start-tab');

const playerContainer = document.getElementById('spotify');
const playerClose = document.getElementById('close-spotify');
const playerBtn = document.getElementById('player-btn');

const browserBtn = document.getElementById('browser-btn');
const closeBrowser = document.getElementById('close-browser');
const browserContainer = document.getElementById('browser');

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// Open/close Folders
const getFcc = () => {       
    fccBtn.ondblclick = function() {
        modal.style.display = 'block';
    }
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

const getFrontEndMentor = () => {
    femBtn.ondblclick = function() {
        modal2.style.display = 'block';
    }
    closeBtn2.onclick = function() {
        modal2.style.display = 'none';
    }
}

const getReact = () => {
    reactBtn.ondblclick = function() {
        modal3.style.display = 'block';
    }
    closeBtn3.onclick = function() {
        modal3.style.display = 'none';
    }
}

const getCertificates = () => {
    certificatesBtn.ondblclick = function() {
        modal4.style.display = 'block';
    }
    closeBtn4.onclick = function() {
        modal4.style.display = 'none';
    }
}

const getAbout = () => {
    aboutBtn.ondblclick = function() {
        modal5.style.display = 'block';
    }
    closeBtn5.onclick = function() {
        modal5.style.display = 'none';
    }
}

// Toolbar
const getClick = () => {
    // apply style for each element in toolbar + start icon
    toolbarIcon.forEach((e) => {
        e.addEventListener('click', () => {
            if(!e.classList.contains('button-active')){
                e.classList.add('button-active');
            }
        })
    });
    startIcon.addEventListener('click', () => {
        if(!startIcon.classList.contains('button-active')){
            startIcon.classList.add('button-active');
            startTab.style.display = 'block';
            startTab.classList.add('fade-in');
        } else {
            startIcon.classList.remove('button-active');
            startTab.style.display = 'none';
        }
    })
}

// Browser
const getDino = () => {
    const browserIcon = document.getElementById('browser-icon');
    // delay style for 2.5s
    browserBtn.onclick = function() {
        setTimeout(() => {
            browserContainer.style.display = 'block';
        }, 2500);
    }
    // close player and change toolbar icon style
    closeBrowser.onclick = function() {
        browserContainer.style.display = 'none';
        if(browserIcon.classList.contains('button-active')){
            browserIcon.classList.remove('button-active');
        }
    }
}
function jump(){
    const counter = document.getElementById('counter');
    const num = parseInt(counter.innerHTML);
    
    if(dispatchEvent.classList != 'jump'){
        // check if dino is mid-jump, if not it makes dino jump
        dino.classList.add('jump');
        setTimeout(() => {
            // remove jump class so it can jump again
            dino.classList.remove('jump');
        }, 420);
    }
    return counter.innerHTML = num + 1; 
}

let checkAlive = setInterval(() => {
    
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue('left')
    );

    if(cactusLeft > 0 && cactusLeft < 15 && dinoTop >= 100){
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert('Whoooooops! Game over :(');
        // window.location.reload();
        dino.style.animationPlayState = 'inherit';
        cactus.style.animationPlayState = 'inherit';
        counter.textContent = '0'; 
    }

}, 10);
document.addEventListener('keydown', () => {
    jump();
});

// Spotify
const getPlayer = () => {
    const playerIcon = document.getElementById('player-icon');
    // delay style for 2.5s
    playerBtn.onclick = function() {
        setTimeout(() => {
            playerContainer.style.display = 'block';
        }, 2500);
    }
    // close player and change toolbar icon style
    playerClose.onclick = function() {
        playerContainer.style.display = 'none';
        if(playerIcon.classList.contains('button-active')){
            playerIcon.classList.remove('button-active');
        }
    }
}

let trackIndex = 0;
let isPlaying = false;
let updateTimer;
let currTrack = document.createElement('audio');
let trackList = [
    {
      name: "Night Owl",
      artist: "Broke For Free",
      image: "Image URL",
      path: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
    },
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "Image URL",
      path: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "Image URL",
      path: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
    },
  ];

const loadTrack = (trackIndex) => {

    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

    // Load new track
    currTrack.src = trackList[trackIndex].path;
    currTrack.load();

    // Update track details
    trackArt.style.backgroundImage = "url(" + trackList[trackIndex].image + ")";
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    nowPlaying.textContent = `PLAYING ${trackIndex + 1} OF ${trackList.length}`;

    // Set interval of 1000 ms for updating time slider (timeUpdate = seekUpdate)
    updateTimer = setInterval(timeUpdate, 1000);

    // Play next track if current one is finished
    currTrack.addEventListener('ended', nextTrack);

    // Random bg color
    randomBgColor();
}

const randomBgColor = () => {
    // get random colors and set the background
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    let bgColor = `rgb (${red}, ${green}, ${blue})`;
    player.style.background = bgColor;
}

const resetValues = () => {
    // reset all values
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    timeSlider.value = 0;
}

const playPauseTrack = () => {
    // switch between playing and pausing
    if(!isPlaying) playTrack();
    else pauseTrack();
}

const playTrack = () => {
    // play track and change play/pause button
    currTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
}

const pauseTrack = () => {
    // pause track and change play/pause button
    currTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
}

const nextTrack = () => {
    // if the song is last on the list, next song is first one from the list
    if(trackIndex < trackList.length - 1){
        trackIndex += 1;
    } else {
        trackIndex = 0;
    }

    loadTrack(trackIndex);
    playTrack();
}

const prevTrack = () => {
    // if the song s first on the list, go to last one with prevBtn 
    if(trackIndex > 0){
        trackIndex -= 1;
    } else {
        trackIndex = trackList.length - 1;
    }
    loadTrack(trackIndex);
    playTrack();
}

const getTime = () => {
    // calculate slider position by the percentage of slider and get the relative duration of the track
    seekTo = currTrack.duration * (timeSlider.value / 100);

    // set the current track position to calculated time position
    currTrack.currentTime = seekTo;
}

const setVolume = () => {
    // set the volume according to the % of volume slider
    currTrack.volume = volumeSlider.value / 100;
}

const timeUpdate = () => {
    let timePosition = 0;

    // check if the current track duration is a legible number
    if(!isNaN(currTrack.duration)){
        timePosition = currTrack.currentTime * (100 / currTrack.duration);
        timeSlider.value = timePosition;
    }

    // calculate time duration  and total duration
    let currentMin = Math.floor(currTrack.currentTime / 60);
    let currentSec = Math.floor(currTrack.currentTime - currentMin * 60);
    let durationMin = Math.floor(currTrack.duration / 60);
    let durationSec = Math.floor(currTrack.duration - durationMin * 60);

    // add zero to one-digit number
    if(currentSec < 10) {
        currentSec = "0" + currentSec;
    }
    if(durationSec < 10){
        durationSec = "0" + durationSec;
    }
    if(currentMin < 10){
        currentMin = "0" + currentMin;
    }
    if(durationMin < 10){
        durationMin = "0" + durationMin;
    }

    // display updated duration
    currentTime.textContent = `${currentMin}:${currentSec}`;
    totalDuration.textContent = `${durationMin}:${durationSec}`;
}

loadTrack(trackIndex);

getFcc();
getFrontEndMentor();
getReact();
getCertificates();
getAbout();
getClick();
getPlayer();
getDino();
