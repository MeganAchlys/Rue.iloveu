function spawnFloatingText() {
  for (let i = 0; i < 12; i++) {
    const float = document.createElement('div');
    float.classList.add('float-text');
    float.textContent = "I love you Rue💕";
    
    // Random horizontal position
    float.style.left = Math.random() * 90 + 'vw';
    float.style.bottom = Math.random() * 10 + 'px';
    
    // Random size, delay, and duration
    float.style.fontSize = (1 + Math.random()) + 'rem';
    float.style.animationDelay = Math.random() * 1 + 's';
    float.style.animationDuration = (5 + Math.random() * 3) + 's';

    document.body.appendChild(float);
    setTimeout(() => float.remove(), 8000);
  }
}

// Trigger it when the envelope opens
seal.addEventListener('click', () => {
  envelope.classList.add('open');
  createConfetti();
  spawnFloatingText();
});
