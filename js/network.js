const initNetworkBg = () => {
  const canvas = document.getElementById('network-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  let isPaused = false;
  
  // Respect prefers-reduced-motion
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    canvas.style.display = 'none';
    return;
  }
  
  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
  };
  
  const initParticles = () => {
    particles = [];
    // Cap particle count based on viewport size for performance
    const numParticles = Math.min(Math.floor((width * height) / 15000), 100);
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5
      });
    }
  };
  
  const draw = () => {
    if (isPaused) {
      requestAnimationFrame(draw);
      return;
    }
    
    ctx.clearRect(0, 0, width, height);
    
    // Determine colors based on theme
    const isLight = document.documentElement.classList.contains('light-mode');
    const nodeColor = isLight ? 'rgba(5, 150, 105, 0.4)' : 'rgba(110, 231, 183, 0.4)';
    const lineColor = isLight ? '10, 13, 19' : '231, 233, 238'; // We'll add alpha per line
    
    // Update and draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    });
    
    // Draw lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Occasional packet
          if (Math.random() > 0.999) {
             ctx.beginPath();
             ctx.arc((particles[i].x + particles[j].x)/2, (particles[i].y + particles[j].y)/2, 2, 0, Math.PI*2);
             ctx.fillStyle = isLight ? '#3B82F6' : '#8AA2FF';
             ctx.fill();
          }
        }
      }
    }
    
    requestAnimationFrame(draw);
  };
  
  window.addEventListener('resize', resize);
  
  document.addEventListener('visibilitychange', () => {
    isPaused = document.hidden;
  });
  
  resize();
  requestAnimationFrame(draw);
};

document.addEventListener('DOMContentLoaded', initNetworkBg);
