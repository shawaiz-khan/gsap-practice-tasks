const button = document.querySelector(".button");

button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
    });
});

button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });
});