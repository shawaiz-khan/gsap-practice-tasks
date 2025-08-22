const box = document.querySelector(".box1")

gsap.to(box, {
    y: 200,
    repeat: -1,
    yoyo: true,
});