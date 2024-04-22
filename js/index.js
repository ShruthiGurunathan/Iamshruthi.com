// Array of words to display in the box
const words = ['Hello', 'Ciao', 'Bonjour', 'Hola', 'Namaste'];

// Function to change the text in the box
function changeText() {
    console.log("Changing text...");
    // Loop through each large-tag element
    document.querySelectorAll('.large-tag').forEach(tag => {
        // Get a random word from the array
        const randomWord = words[Math.floor(Math.random() * words.length)];
        
        // Update the content of the changing-text element within the current large-tag
        console.log("Updating text to:", randomWord);
        const changingTextElement = tag.querySelector('.changing-text');
        console.log("Changing text element:", changingTextElement);
        changingTextElement.textContent = randomWord;
        console.log("New text content:", changingTextElement.textContent);
    });
}

// Change the text every 3 seconds (3000 milliseconds)
setInterval(changeText, 3000);

// Log initial text
changeText();