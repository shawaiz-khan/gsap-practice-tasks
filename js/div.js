const div = document.querySelector(".div-to-change");

gsap.to(div, {
    backgroundColor: "blue",
    duration: 1,
    repeat: -1,
});