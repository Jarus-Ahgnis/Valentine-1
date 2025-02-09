// Function to create and animate floating "LOVE" symbols (❤)
function createFloatingLoves() {
    const body = document.querySelector('body');

    for (let i = 0; i < 5; i++) {  // Create 5 "❤" symbols at random positions
        const love = document.createElement('div');
        love.classList.add('love');
        love.textContent = '❤';
        love.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        love.style.animationDuration = `${Math.random() * 4 + 4}s`; // Random animation duration

        body.appendChild(love);

        // Remove the "❤" symbol after the animation is finished
        love.addEventListener('animationend', () => {
            love.remove();
        });
    }
}

// Call the createFloatingLoves function every 1 second to generate new "❤" symbols
setInterval(createFloatingLoves, 1000);

// Function to handle the "No" button click
const messages = [
    "Really??",
    "Are you sure for real???",
    "Think once again!!!",
    "Accept please....",
    "Please na my love....",
    "Please accept my proposal cutie!!!",
    "Pleaseeeeeee......",
    "Fine I give up...",
    "Just kidding, say yes please! ❤"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`; // Increase YES button size
}

// Function to handle the "Yes" button click (redirect to another page)
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Function to create floating romantic messages
function createFloatingMessage(text) {
    const message = document.createElement("div");
    message.classList.add("floating-message");
    message.textContent = text;
    message.style.left = `${Math.random() * 80}vw`;
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
}

// Function to generate confetti
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Trigger floating messages and confetti on the YES page
if (window.location.pathname.includes("yes_page.html")) {
    setInterval(() => {
        createFloatingMessage("I love you ❤");
        createFloatingMessage("Forever yours 💖");
        createFloatingMessage("You're my everything 💕");
        createConfetti();
    }, 1000);
}
