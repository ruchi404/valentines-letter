const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open Letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

let yesScale = 1;
let noClickCount = 0;

// Arrays for changing content
const messages = [
    "Are you sure?",
    "Think again!",
    "Pwease? :(",
    "Don't do this!",
    "I'm gonna cry..."
];

const images = [
    "2.jpg",
    "1.jpeg",
    "cat-meme.gif",
    "sd.gif"
];

// No Button Logic
noBtn.addEventListener("click", () => {
    // 1. Scale Yes Button
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // 2. Change Title and Image
    if (noClickCount < messages.length) {
        title.textContent = messages[noClickCount];
    }
    
    if (noClickCount < images.length) {
        catImg.src = images[noClickCount];
    }

    noClickCount++;

    // 3. Make No button slightly smaller
    let noScale = Math.max(0.5, 1 - (yesScale * 0.1));
    noBtn.style.transform = `scale(${noScale})`;
});

// Yes Button Logic
yesBtn.addEventListener("click", () => {
    title.textContent = "date confirm!";
    catImg.src = "pxlv.png";
    buttons.style.display = "none";
    finalText.style.display = "block";
});