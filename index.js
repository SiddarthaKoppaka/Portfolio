// // Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

// // Paper plane animation using GSAP
// gsap.to("#paper-plane", {
//     scrollTrigger: {
//         trigger: "body", // Trigger animation based on the entire body scroll
//         start: "top top", // Start when page starts scrolling
//         end: "bottom bottom", // End when you reach the bottom
//         scrub: true // Smoothly scrub the animation based on scroll
//     },
//     x: window.innerWidth + 100, // Move the plane across the entire screen width
//     y: [0, -200, 100, -100], // Change this to make the plane move up and down
//     rotation: 150, // Plane spins as it moves
//     duration: 3 // Duration of the animation
// });


window.addEventListener('scroll', function() {
    const svg = document.getElementById('my-svg');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Adjust the reveal effect
    const maxScroll = document.body.scrollHeight - viewportHeight;
    const scrollFraction = scrollPosition / maxScroll;

    // Control the SVG's position and opacity
    svg.style.opacity = Math.min(1, scrollFraction * 2); // Fade-in effect
    svg.style.transform = `translateY(${Math.max(0, 100 - scrollFraction * 100)}%)`;
});

// Typewriter effect using anime.js
let textWrapper = document.querySelector('.name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.name .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2500,
    delay: (el, i) => 150 * (i + 1)
  });




  
  
