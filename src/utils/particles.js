// particles.js — canvas-based particle system responding to mouse coordinates
export function initBackgroundParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  canvas.style.opacity = '0.4';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const side = document.body.dataset.side; // 'dev', 'food', undefined
  let symbols = [];
  if (side === 'dev') {
    symbols = ['{', '}', '</>', '=>', ';', '[]', '()', 'ts', 'py', 'mcp'];
  } else if (side === 'food') {
    symbols = ['🔪', '🍳', '🔥', '🌿', '🥣', '🥖', '🦐', '🍋', '🧂', '🥖'];
  } else {
    symbols = ['{', '}', '🔪', '🍳', 'mcp', '🌿', '=>', '🔥'];
  }

  const particles = [];
  const maxParticles = 28;
  const mouse = { x: null, y: null, radius: 110 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);
  });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height + height; // start off-screen bottom
      if (Math.random() > 0.5) this.y = Math.random() * height; // or anywhere
      this.size = Math.random() * 12 + 10;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = -(Math.random() * 0.5 + 0.15); // float upwards
      this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
      this.alpha = Math.random() * 0.35 + 0.15;
      this.angle = Math.random() * 360;
      this.spin = Math.random() * 0.4 - 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.angle += this.spin;

      // Wrap-around screen
      if (this.y < -20) {
        this.reset();
        this.y = height + 20;
      }
      if (this.x < -20 || this.x > width + 20) {
        this.reset();
      }

      // Mouse collision repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 3;
          this.y += Math.sin(angle) * force * 3;
        }
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.font = `${this.size}px var(--font-mono, monospace)`;
      ctx.fillStyle = side === 'food' ? '#f97316' : '#2563eb';
      if (!side) ctx.fillStyle = '#64748b';
      ctx.translate(this.x, this.y);
      ctx.rotate((this.angle * Math.PI) / 180);
      ctx.fillText(this.symbol, -this.size / 2, this.size / 2);
      ctx.restore();
    }
  }

  // Populate particles list
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
