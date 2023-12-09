const button = document.querySelector("#button");
const icon = document.querySelector("#button > span");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play();
        icon.textContent = "pause";
    } else {
        audio.pause();
        icon.textContent = "play_arrow";
    }
    button.classList.add("fade");
});