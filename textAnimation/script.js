function breakTheText() {
  let h1 = document.querySelector("h1");

  let text = h1.textContent;
  let splittedText = text.split("");

  let halfText = splittedText.length/2;
  let clutter = "";

  

  splittedText.forEach(function (elem,idx) {
    // clutter += `<span>${elem}</span>`;
    if (idx<halfText) {
    clutter += `<span class="a">${elem}</span>`;
    } else {
    clutter += `<span class="b">${elem}</span>`;
    }
    h1.innerHTML = clutter;
  });
}
breakTheText();

gsap.from('.a', {
  y: 80,
  duration: 0.3,
  delay: 0.1,
  stagger: 0.15,
  opacity: 0,
});
gsap.from('.b', {
  y: 80,
  duration: 0.3,
  delay: 0.1,
  stagger: -0.15,
  opacity: 0,
});
