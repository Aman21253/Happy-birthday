function unwrapGift() {
    // Play sound
    document.getElementById("popSound").play();
  
    // Open the lid
    document.querySelector(".box-lid").style.transform = "rotateX(160deg)";
  
    // Hide tap text
    document.querySelector(".tap-text").style.display = "none";
  
    // Show balloons after 1s
    setTimeout(showBalloons, 800);
  }
  
  function showBalloons() {
    const container = document.getElementById("balloonContainer");
    container.style.opacity = 1;
  
    const message = ["H", "A", "P", "P", "Y", "💖", "B", "D", "A", "Y"];
    message.forEach((char, i) => {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.innerText = char;
      balloon.style.left = `${10 + i * 8}%`;
      balloon.style.animationDelay = `${i * 0.3}s`;
  
      // If last balloon, make it clickable
      if (i === message.length - 1) {
        balloon.style.cursor = "pointer";
        balloon.onclick = () => {
          window.location.href = "journey.html";
        };
      }
  
      container.appendChild(balloon);
    });
  }