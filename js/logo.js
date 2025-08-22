const logo = document.querySelector(".logo");

const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    delay: 1
});

tl.fromTo(
    logo,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
)
    .to(
        logo,
        { rotate: 360, duration: 1, ease: "none" }
    )
    .to(
        logo,
        { borderRadius: "100%", x: 300, duration: 1, ease: "power2.inOut" }
    );