const box = document.querySelector(".box")

gsap.to(box, {
    x: "85vw",
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: "PowerIn.Out"
});