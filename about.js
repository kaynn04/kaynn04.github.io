window.onload = function () {
    const descriptions = [
        "My name is Kyan Oclares, and I am currently a 20-year-old student at National University, where I am pursuing a degree in BS Information Technology - Mobile and Technology.",
        "Since I was little, I have always loved using technology. It all began with our family computer, and later, I requested a PSP. However, my primary focus remained on using the computer.",
        "But there was a phase in my life when I felt that my passion for technology was diminishing, leading me to believe that my future would not be connected with technology.",
        "However, when the pandemic started, it slowly began to rekindle because it became one of my essential lifelines, reigniting my fervor for technology and affirming its indispensable role in shaping my future endeavors."
    ];

    const aboutWrapper = document.querySelector('.about-wrapper');
    const descriptionElement = document.querySelector('.description');
    const indicatorElement = document.querySelector('.description-indicator');
    const tapToContinueElement = document.querySelector('.tap-to-continue');

    let currentDescriptionIndex = 0;
    let index = 0;
    let animationInProgress = false; // Flag to track animation status

    function typeDescription() {
        animationInProgress = true; // Set the flag to true when animation starts
        const interval = setInterval(() => {
            descriptionElement.innerHTML += descriptions[currentDescriptionIndex][index];
            index++;

            // Update the indicator
            indicatorElement.innerHTML = `<${currentDescriptionIndex + 1}/${descriptions.length}>`;

            if (index === descriptions[currentDescriptionIndex].length) {
                clearInterval(interval);
                showTapToContinue();
                animationInProgress = false; // Set the flag to false when animation finishes
                aboutWrapper.classList.add('pointer-cursor'); // Add class to change cursor
            } 
        }, 8); // Adjust the interval duration for typing speed
    }

    function showTapToContinue() {
        tapToContinueElement.style.display = 'block';
        tapToContinueElement.addEventListener('click', handleTapToContinue);
    }

    function showRestartButton() {
        // Delay the display of the restart button by 2 seconds
            showRestartConfirmation();

    }

    function showRestartConfirmation() {
        // Create a confirmation dialog
        const confirmationDialog = document.createElement('div');
        confirmationDialog.classList.add('confirmation-dialog');
    
        // Add text to the confirmation dialog
        const confirmationText = document.createElement('div');
        confirmationText.innerHTML = '<strong>Restart the story?</strong>';
        confirmationText.classList.add('confirmation-text');
        confirmationDialog.appendChild(confirmationText);
    
        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        
        // Create "Yes" button
        const yesButton = document.createElement('span');
        yesButton.innerHTML = 'Yes';
        yesButton.classList.add('confirmation-button', 'yes-button');
        yesButton.addEventListener('click', () => {
            confirmationDialog.remove(); // Remove the confirmation dialog
            tapToContinueElement.innerHTML = "Tap here to continue"; // Reset the text
            typeDescription(); // Restart typing
        });
        buttonContainer.appendChild(yesButton);
    
        // Add spacing
        const spacing = document.createElement('span');
        spacing.innerHTML = '&nbsp;&nbsp;'; // Adjust the spacing as needed
        buttonContainer.appendChild(spacing);
    
        // Create "No" button
        const noButton = document.createElement('span');
        noButton.innerHTML = 'No';
        noButton.classList.add('confirmation-button', 'no-button');
        noButton.addEventListener('click', () => {
            confirmationDialog.remove(); // Remove the confirmation dialog
            tapToContinueElement.addEventListener('click', openNav());
            showRestartButton();
        });
        buttonContainer.appendChild(noButton);
    
        // Append the button container to the confirmation dialog
        confirmationDialog.appendChild(buttonContainer);
    
        // Append the confirmation dialog to the description element
        descriptionElement.appendChild(confirmationDialog);
    }

    function handleTapToContinue() {
        // Check if the animation is not in progress
        if (!animationInProgress) {
            tapToContinueElement.style.display = 'none';

            if (currentDescriptionIndex < descriptions.length - 1) {
                // Move to the next description
                currentDescriptionIndex++;
                index = 0; // Reset the index for the next description
                descriptionElement.innerHTML = ''; // Clear the previous text
                indicatorElement.innerHTML = ''; // Clear the indicator
                typeDescription(); // Start typing the next description
            } else {
                // Reset everything after "Tap anywhere to access navigation" is clicked
                currentDescriptionIndex = 0;
                index = 0;
                descriptionElement.innerHTML = '';
                indicatorElement.innerHTML = '';
                aboutWrapper.classList.remove('pointer-cursor'); // Remove the cursor change class
                showRestartButton(); // Display the restart button with a delay
            }
        }
    }

    typeDescription();
};

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    showRestartButton(); // Display the restart button with a delay after closing the overlay
}

const markSpan = document.getElementById('mark');
const mark1Span = document.getElementById('mark1');

function animate() {
  markSpan.style.opacity = 1;

  setTimeout(() => {
    mark1Span.style.opacity = 1;

    setTimeout(() => {
      markSpan.style.opacity = 0;
      mark1Span.style.opacity = 0;

      // Reset opacity at the end of each cycle
      setTimeout(() => {
        markSpan.style.opacity = 0;
        mark1Span.style.opacity = 0;
      }, 900);
    }, 900);
  }, 900);
}

// Call the animate function initially
animate();

// Use setInterval to repeat the animation
setInterval(animate, 3000);

document.addEventListener("DOMContentLoaded", function () {
    // Get the line element
    var line = document.getElementById("underline");
  
    // Check if the line element exists on the page
    if (line) {
      // Set the initial width to 0% to make it invisible
      line.style.width = "0%";
  
      // Add a delay to start the animation after a short period
      setTimeout(function () {
        // Set the width to 100% to animate from left to right
        line.style.width = "100%";
        // Set the transform origin to start from the left
        line.style.transformOrigin = "left";
      }, 100);
  
      // Add an event listener for the beforeunload event
      window.addEventListener("beforeunload", function () {
        // Reset the width to 0% when the page is about to unload
        line.style.width = "0%";
      });
    }
  });

  function showtitleContainer() {
    const socialIcons = document.querySelector('.title-container');
    socialIcons.style.opacity = '1';
}

setTimeout(showtitleContainer, 100);