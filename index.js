window.onload = function () {
    const typingAnimations = document.querySelectorAll('.typing-animation');
    const myPicture = document.querySelector('.mypicture');
    const webdevElement = document.querySelector('.webdev');
    const nameElement = document.querySelector('.name');
    const tweakingElement = document.querySelector('.tweaking');
    const words = ["Software Engineer", "Data Administrator", "Professional Player"];
    let currentWordIndex = 0;
    let glow = 0;
    let increasing = true;
    const color = '#525CEB';
    const fadeDuration = 1000; // Duration for fading in and out the word

    function runTypingAnimations() {
        let delay = 0;
        for (let i = 0; i < typingAnimations.length; i++) {
            setTimeout(() => {
                typingAnimations[i].style.opacity = '1';
            }, delay);
            delay += 500;
        }

        setTimeout(() => {
            typingAnimations.forEach((span) => {
                span.style.opacity = '0';
            });
            runTypingAnimations();
        }, delay + 500);
    }

    function animateBoxShadow() {
        setInterval(() => {
            if (increasing) {
                glow += 1;
                if (glow >= 20) {
                    increasing = false;
                }
            } else {
                glow -= 1;
                if (glow <= 0) {
                    increasing = true;
                }
            }
            myPicture.style.boxShadow = `0 0 ${glow}px 5px ${color}`;
        }, 80);
    }

    function fadeInOut(element, text) {
        element.style.opacity = '0';
        element.innerHTML = text;

        let startTime;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const opacity = progress / fadeDuration;

            if (opacity < 1) {
                element.style.opacity = opacity;
            } else {
                startTime = null;
                // Call the showTweaking function after the typing animation is completed
                setTimeout(showTweaking, 1000); // Adjust the delay as needed
            }

            if (progress < fadeDuration) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    function fadeOut(element) {
        element.style.opacity = '1';
        let startTime;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const opacity = 1 - progress / fadeDuration;

            if (opacity > 0) {
                element.style.opacity = opacity;
            } else {
                startTime = null;
            }

            if (progress < fadeDuration) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    function updateWebDevText() {
        fadeOut(webdevElement);
        setTimeout(() => {
            const nextWord = words[currentWordIndex];
            fadeInOut(webdevElement, nextWord);
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }, fadeDuration);
    }

    runTypingAnimations();
    animateBoxShadow();
    typeOutName();

    function showTweaking() {
        tweakingElement.style.opacity = '1';
    }

    // New function to type out the name
    function typeOutName() {
        nameElement.innerHTML = '';
        const name = "Kyan Oclares";
        let index = 0;

        function typeCharacter() {
            if (index < name.length) {
                nameElement.innerHTML += name.charAt(index);
                index++;
                setTimeout(typeCharacter, 80); // Adjust the typing speed as needed
            }
        }

        setTimeout(typeCharacter, 800);
    }

    updateWebDevText();
    setInterval(updateWebDevText, 3000);
};

// Your existing JavaScript code

function showSocialIcons() {
    const socialIcons = document.querySelector('.social-icons');
    socialIcons.style.opacity = '1';
}

function shownavigation() {
    const navigation = document.querySelector('nav');
    navigation.style.opacity = '1';
}

function showsub() {
    const subtitle = document.querySelector('.sub');
    subtitle.style.opacity = '1';
}

function showimage() {
    const image = document.querySelector('.image');
    image.style.opacity = '1';
}

// Set delays for each element
setTimeout(showimage, 100)
setTimeout(showsub, 1000)
setTimeout(showSocialIcons, 1500); // Set the initial delay for the social icons
setTimeout(shownavigation, 2000);


