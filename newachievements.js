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

function showcardContainer() {
  const socialIcons = document.querySelector('.card-container');
  socialIcons.style.opacity = '1';
}

function showcard1() {
  const socialIcons = document.querySelector('.card');
  socialIcons.style.opacity = '1';
}

function showcard2() {
  const socialIcons = document.querySelector('.card2');
  socialIcons.style.opacity = '1';
}

function showcard3() {
  const socialIcons = document.querySelector('.card3');
  socialIcons.style.opacity = '1';
}

function showcard4() {
  const socialIcons = document.querySelector('.card4');
  socialIcons.style.opacity = '1';
}

setTimeout(showtitleContainer, 100);
setTimeout(showcardContainer, 1000);
setTimeout(showcard1, 1000);
setTimeout(showcard2, 1500);
setTimeout(showcard3, 2000);
setTimeout(showcard4, 2500);