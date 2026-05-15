

const videoPart1 =[
	{ src: "videos/left.mp4", caption: "Left it is." },
	{ src: "videos/right.mp4", caption: "Right it is." }
];

const videoPart2 = [
	{ src: "videos/butterfly.mp4", caption: "You come across a butterfly... and decide to pick it up." },
	{ src: "videos/cat.mp4", caption: "You come across a cat... and decide to pick it up." },
	{ src: "videos/flower.mp4", caption: "You come across a flower... and decide to pick it up." },
	{ src: "videos/crystal.mp4", caption: "You come across a crystal... and decide to pick it up." },
	{ src: "videos/coin.mp4", caption: "You come across a coin... and decide to pick it up." }
];

const videoPart3 = [
	{ src: "videos/restart.mp4", caption: "What the...that thing just transported me back to where I started. I think I've had enough walking for today." },
	{ src: "videos/lake.mp4", caption: "What the...that thing just transported me into a lake. I think I've had enough walking for today." },
	{ src: "videos/school.mp4", caption: "What the...that thing just transported me to school. I think I've had enough walking for today." },
	{ src: "videos/store.mp4", caption: "What the...that thing just transported me to the store. I think I've had enough walking for today." },
	{ src: "videos/city.mp4", caption: "What the...that thing just transported me into the city. I think I've had enough walking for today." }
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText");
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array [randomIndex]);
	return array [randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);


let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	titleOverlay.classList.add("playing");
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";

	
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3)
	];
	
	currentIndex = 0;
	
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
	console.log("All three parts finished.");
	replayBtn.style.display = "block";
	}
});
