const text = document.querySelector(".text")

const innerText = text.textContent;
const letters = innerText.split("");

text.textContent = "";

letters.forEach((letter) => {
    const span = document.createElement("span")
    span.textContent = letter;
    text.appendChild(span);
});

const spans = text.querySelectorAll("span")

gsap.fromTo(spans,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" }
);