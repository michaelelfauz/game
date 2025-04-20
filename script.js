const game = document.getElementById("game");
const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

let playerPos = 280;

// Gerak kiri-kanan
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerPos > 0) {
    playerPos -= 20;
  }
  if (e.key === "ArrowRight" && playerPos < 560) {
    playerPos += 20;
  }
  player.style.left = playerPos + "px";

  // Tembak
  if (e.key === " ") {
    shootBullet(playerPos + 17); // tengah player
  }
});

// Fungsi nembak
function shootBullet(startX) {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.left = startX + "px";
  bullet.style.bottom = "30px";
  game.appendChild(bullet);

  const moveBullet = setInterval(() => {
    const bottom = parseInt(bullet.style.bottom);
    if (bottom > 400) {
      bullet.remove();
      clearInterval(moveBullet);
    } else {
      bullet.style.bottom = bottom + 10 + "px";
    }

    // Cek tabrak enemy
    const bulletRect = bullet.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();
    if (
      bulletRect.top < enemyRect.bottom &&
      bulletRect.bottom > enemyRect.top &&
      bulletRect.left < enemyRect.right &&
      bulletRect.right > enemyRect.left
    ) {
      alert("🎉 Kena musuh!");
      bullet.remove();
      enemy.remove();
      clearInterval(moveBullet);
    }
  }, 30);
}
