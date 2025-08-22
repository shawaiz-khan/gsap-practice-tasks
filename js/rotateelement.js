const box = document.querySelector(".box1")

gsap.to(box, {
    rotate: 360,
    repeat: -1,
    yoyo: true,
})