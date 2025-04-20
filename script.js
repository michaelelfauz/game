const enemy = document.getElementById('enemy');
const scoreText = document.getElementById('score');
let score = 0;

// Musuh pindah tempat tiap 1 detik
setInterval(() => {
  const x = Math.random() * (window.innerWidth - 80);
  const y = Math.random() * (window.innerHeight - 80);
  enemy.style.left = x + 'px';
  enemy.style.top = y + 'px';
}, 1000);

// Tembak musuh
enemy.addEventListener('click', () => {
  score += 1;
  scoreText.textContent = 'Score: ' + score;
  enemy.style.background = 'lime';
  setTimeout(() => enemy.style.background = 'red', 200);
});
