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
    
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        showRestartButton(); // Display the restart button with a delay after closing the overlay
    }

    

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

    function showdescription() {
      const socialIcons = document.querySelector('.description1');
      socialIcons.style.opacity = '1';
  }

    function showskillsContainer() {
      const socialIcons = document.querySelector('.skills-container');
      socialIcons.style.opacity = '1';
  }

  
  setTimeout(showtitleContainer, 100);
  setTimeout(showdescription, 500);
  setTimeout(showskillsContainer, 1000);
        
  document.addEventListener("DOMContentLoaded", function () {
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
  
    // Function to add active class to the next skill after a delay
    function addActiveClassAfterDelay(skillId, delay, logoStyles) {
      setTimeout(function () {
        const skillElement = document.getElementById(skillId);
        skillElement.classList.add("active");
  
        // Show the logo after a short delay
        setTimeout(function () {
          const logoElement = skillElement.querySelector('.logo');
          logoElement.style.display = 'block';
          // Apply dynamic styles based on the provided logoStyles object
          Object.assign(logoElement.style, logoStyles);
        }, 500);
  
        // Hide the logo after a longer delay
        setTimeout(function () {
          skillElement.querySelector('.logo').style.display = 'none';
        }, 2000); // Adjust this delay based on your sequence duration
      }, delay);
    }
  
    // Function to start the sequencing loop
    function startSequencingLoop() {
      // Initial delay before starting the sequencing
      setTimeout(function () {
        // Add active class to the HTML skill after 2s
        addActiveClassAfterDelay("html", 0, {
          bottom: '-200px',
          right: '-740px',
          width: '400px',
          height: '340px'
        });
  
        // Add active class to the CSS skill after 4s
        addActiveClassAfterDelay("css", 2000, {
          bottom: '-200px',
          right: '-700px',
          width: '360px',
          height: '340px'
        });
  
        // Add active class to the JavaScript skill after 6s
        addActiveClassAfterDelay("javascript", 4000, {
          bottom: '-200px',
          right: '-700px',
          width: '340px',
          height: '350px'
        });
  
        // Add active class to the Python skill after 8s
        addActiveClassAfterDelay("Python", 6000, {
          bottom: '-200px',
          right: '-700px',
          width: '340px',
          height: '350px'
        });
  
        // Add active class to the Java skill after 10s
        addActiveClassAfterDelay("Java", 8000, {
          bottom: '-200px',
          right: '-700px',
          width: '410px',
          height: '340px'
        });
  
        // Add active class to the MySQL skill after 12s
        addActiveClassAfterDelay("mysql", 10000, {
          bottom: '-200px',
          right: '-700px',
          width: '360px',
          height: '250px'
        });
  
        // Add active class to the Figma skill after 14s
        addActiveClassAfterDelay("Figma", 12000, {
          bottom: '-200px',
          right: '-700px',
          width: '250px',
          height: '330px'
        });
  
        // Add active class to the GitHub skill after 16s
        addActiveClassAfterDelay("Git", 14000, {
          bottom: '-200px',
          right: '-700px',
          width: '330px',
          height: '330px'
        });
  
        // Add active class to the Android Studio skill after 18s
        addActiveClassAfterDelay("Android-Studio", 16000, {
          bottom: '-200px',
          right: '-700px',
          width: '390px',
          height: '400px'
        });
  
        // Restart both color-changing and skill animation loops after a delay
        setTimeout(startSequencingLoop, 18000);
      }, 2000); // Initial delay before starting the sequencing
    }
  
    // Start the sequencing loop
    startSequencingLoop();
  });
  
  