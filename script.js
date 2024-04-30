// Get the status paragraph and the enter button
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

// Function to handle button click
function handleEnter() {
    // Change the text to "Entered Metaverse" enclosed in an <h1> tag
    statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
}

// Add event listener to the enter button
enterButton.addEventListener("click", handleEnter);
