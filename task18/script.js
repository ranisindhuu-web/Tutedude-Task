// ==========================================================================
// Task: Interactive Color Grid Interface DOM Action Pipeline
// ==========================================================================

// 1. DOM Element Reference Node Selection Cache
const greetingHeader = document.getElementById('greetingHeader');
const userNameInput = document.getElementById('userNameInput');
const greetBtn = document.getElementById('greetBtn');

const boxRed = document.getElementById('boxRed');
const boxBlue = document.getElementById('boxBlue');
const boxGreen = document.getElementById('boxGreen');
const boxYellow = document.getElementById('boxYellow');

// 2. Click Handler Logic Event Binding
greetBtn.addEventListener('click', () => {
    // Read clean user input text value
    const enteredName = userNameInput.value.trim();
    
    // Fallback protection check: if empty string, insert a placeholder default name
    const finalDisplayName = enteredName !== "" ? enteredName : "Friend";

    // Requirement Met: Dynamically update header text node on click
    greetingHeader.textContent = `Hello, ${finalDisplayName}`;

    // Requirement Met: Apply corresponding color backgrounds to the grid
    boxRed.classList.add('active-red');
    boxBlue.classList.add('active-blue');
    boxGreen.classList.add('active-green');
    boxYellow.classList.add('active-yellow');
});