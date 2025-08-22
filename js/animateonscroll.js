gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".heading");
const container = document.querySelector(".heading-container");
const letters = text.textContent.split("");

text.textContent = "";

letters.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    text.appendChild(span);
});

const spans = document.querySelectorAll(".heading > span");

gsap.fromTo(spans,
    { opacity: 0, y: 20 },
    {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: container,
            start: "top 40%",
            end: "bottom 90%",
            markers: true,
            scrub: 1,
            pin: true,
        }
    }
);