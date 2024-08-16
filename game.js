// Step 3: Create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow"
var buttonColours = ["red", "blue", "green", "yellow"];

// Step 5: Create a new empty array called gamePattern
var gamePattern = [];

// Step 3: Create a new empty array with the name userClickedPattern
var userClickedPattern = [];

// Step 7: Create a new variable called level and start at level 0
var level = 0;

// Variable to track whether the game has started
var started = false;

// Step 7: Detect when a keyboard key has been pressed
$(document).keydown(function() {
    if (!started) {
        // Change h1 title to "Level 0" when the game starts
        $("#level-title").text("Level " + level);
        nextSequence();  // Call nextSequence to start the game
        started = true;  // Set started to true so it doesn't restart on further keypresses
    }
});

// Detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");  // Step 4: Store the id of the clicked button
    userClickedPattern.push(userChosenColour);  // Add the clicked colour to userClickedPattern

    playSound(userChosenColour);  // Play the corresponding sound
    animatePress(userChosenColour);  // Animate the button press
});

// Step 2: Create a new function called playSound that takes a single input parameter called name
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();  // Play the sound corresponding to the name
}

// Step 6: Create a new function called animatePress
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");  // Add the "pressed" class to the button

    // Remove the "pressed" class after 100 milliseconds
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Step 1: Create a new function called nextSequence
function nextSequence() {
    level++;  // Increase the level by 1 each time nextSequence() is called
    $("#level-title").text("Level " + level);  // Update the h1 with the new level value

    var randomNumber = Math.floor(Math.random() * 4);  // Generate a random number between 0 and 3
    var randomChosenColour = buttonColours[randomNumber];  // Use the random number to select a colour
    gamePattern.push(randomChosenColour);  // Add the new colour to the game pattern

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  // Animate the selected button
    playSound(randomChosenColour);  // Play the corresponding sound
}
