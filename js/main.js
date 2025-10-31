document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.getElementById("tickerContent");
  const word = "STOK";
  const count = 16;

  // Generate ticker text
  for (let i = 0; i < count; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = word;
    ticker.appendChild(h1);
  }

  // Duplicate content for seamless scroll
  ticker.innerHTML += ticker.innerHTML;

  // Animation logic
  let position = -ticker.scrollHeight / 2;
  const speed = 1.5;

  function animate() {
    position += speed;
    if (position >= 0) position = -ticker.scrollHeight / 2;
    ticker.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
