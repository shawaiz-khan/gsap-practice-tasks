const boxContainer = document.querySelector(".boxes-container")
const boxes = boxContainer.querySelectorAll("div");

gsap.from(boxes, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5
    ,
    ease: "power2.out"
});