const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

       
        const maxMovement = 10;  
        const moveX = Math.cos(angle) * maxMovement;
        const moveY = Math.sin(angle) * maxMovement;

        const pupil = pupils[index];
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
