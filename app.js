const tomBeat = document.getElementById("tAudio");
const tomBtn = document.querySelector(".tom-btn");

const clapBeat = document.getElementById("cAudio");
const clapBtn = document.querySelector(".clap-btn");

const kickBeat = document.getElementById("kAudio");
const kickBtn = document.querySelector(".kick-btn");

const openHatBeat = document.getElementById("oAudio");
const openHatBtn = document.querySelector(".openhat-btn");

const boomBeat = document.getElementById("bAudio");
const boomBtn = document.querySelector(".boom-btn");

const rideBeat = document.getElementById("rAudio");
const rideBtn = document.querySelector(".ride-btn");

const snareBeat = document.getElementById("sAudio");
const snareBtn = document.querySelector(".snare-btn");

const toms = document.querySelectorAll(".tom");
const claps = document.querySelectorAll(".clap");
const kicks = document.querySelectorAll(".kick");
const hats = document.querySelectorAll(".hat");
const booms = document.querySelectorAll(".boom");
const rides = document.querySelectorAll(".ride");
const snares = document.querySelectorAll(".snare");

const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");

const addBtns = (list) => {
    list.forEach(el => {
        el.addEventListener("click", (e) => {
            console.log(e);
            if (e.target.classList.contains("play")) {
                e.target.classList.remove("play");
            } else {
                e.target.classList.add("play");
            }
        })
    });
}

addBtns(toms);
addBtns(claps);
addBtns(kicks);
addBtns(hats);
addBtns(booms);
addBtns(rides);
addBtns(snares);

let tempo = 200;
// let play = false;
let beatLength = 12;

const iterate = (list, timing, sound) => {
    list.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("active-btn");
            if (el.classList.contains("play")) {
                sound();
            }
            setTimeout(() => {
                el.classList.remove("active-btn");
            }, timing)
        }, i * timing)
    });
};

tomBtn.addEventListener("click", () => playTom());
clapBtn.addEventListener("click", () => playClap());
kickBtn.addEventListener("click", () => playKick());
openHatBtn.addEventListener("click", () => playHat());
boomBtn.addEventListener("click", () => playBoom());
rideBtn.addEventListener("click", () => playRide());
snareBtn.addEventListener("click", () => playSnare());

const playTom = () => {
    tomBeat.currentTime = 0;
    tomBeat.play();
}

const playClap = () => {
    clapBeat.currentTime = 0;
    clapBeat.play();
}

const playKick = () => {
    kickBeat.currentTime = 0;
    kickBeat.play();
}

const playHat = () => {
    openHatBeat.currentTime = 0;
    openHatBeat.play();
}

const playBoom = () => {
    boomBeat.currentTime = 0;
    boomBeat.play();
}

const playRide = () => {
    rideBeat.currentTime = 0;
    rideBeat.play();
}

const playSnare = () => {
    snareBeat.currentTime = 0;
    snareBeat.play();
}

const playSounds = (i) => {
    iterate(toms, tempo, playTom);
    iterate(claps, tempo, playClap);
    iterate(kicks, tempo, playKick);
    iterate(hats, tempo, playHat);
    iterate(booms, tempo, playBoom);
    iterate(rides, tempo, playRide);
    iterate(snares, tempo, playSnare);
}

// const playAll = () => {
//   let i;

//   for(i=0; i<5; i++) {
//     playSounds(i);
//   }
// }

let musicPlaying;

const play = () => {
    musicPlaying = setInterval(playSounds, tempo * 12);
    playBtn.style.display = "none";
    stopBtn.style.display = "block";
    // playBtn.removeAttribute("onclick");
    // stopBtn.setAttribute("onclick",stop());
    // playBtn.classList.add("not-active");
    // stopBtn.classList.remove("not-active");
}

const stop = () => {
    clearInterval(musicPlaying);
    stopBtn.style.display = "none";
    playBtn.style.display = "block";
    // stopBtn.removeAttribute("onclick");
    // playBtn.setAttribute("onclick",play());
    // stopBtn.classList.add("not-active");
    // playBtn.classList.remove("not-active");
}


