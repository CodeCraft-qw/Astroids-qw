// Array to store shapes
let shapes = [];

// Function to create a random shape
function createShape() {
    // Generate random position within game container
    let x = Math.random() * (400 - 50);
    let y = Math.random() * (400 - 50);

    // Randomly choose between circle and square
    let shapeType = Math.random() < 0.5 ? 'circle' : 'square';

    // Create shape element
    let shape = document.createElement('div');
    shape.className = `shape ${shapeType}`;
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;

    // Add click event listener to shape
    shape.addEventListener('click', () => {
        shape.remove(); // Remove shape when clicked
    });

    // Add shape to game container
    document.getElementById('game-container').appendChild(shape);

    // Add shape to shapes array
    shapes.push(shape);

    // Schedule creation of next shape after a delay
    setTimeout(createShape, 1000);
}

// Start the game
createShape();

let timer; // Variable to hold the setInterval instance
let totalSeconds = 0; // Total seconds elapsed

function startTimer() {
    timer = setInterval(updateTimer, 1000); // Update timer every second (1000 ms)
}

function updateTimer() {
    totalSeconds++;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format time as HH:MM:SS
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // Display the formatted time on the page
    document.getElementById('timer').textContent = formattedTime;
}

function pad(val) {
    const valString = val + '';
    return valString.length < 2 ? '0' + valString : valString;
}

// Start the timer when the page loads
window.onload = startTimer;