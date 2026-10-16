'use strict';
(() => {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const dot = document.createElement('span');
  const ring = document.createElement('span');
  dot.className = 'pointer-dot';
  ring.className = 'pointer-ring';
  dot.setAttribute('aria-hidden', 'true');
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(dot, ring);
  let x = 0, y = 0, ringX = 0, ringY = 0, cursorFrame = 0;
  let tracking = false;
  function paintCursor() {
    cursorFrame = 0;
    if (!tracking || !finePointer.matches) return;
    const ease = reducedMotion.matches ? 1 : 0.2;
    ringX += (x - ringX) * ease;
    ringY += (y - ringY) * ease;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    if (Math.abs(x - ringX) + Math.abs(y - ringY) > 0.2) {
      cursorFrame = requestAnimationFrame(paintCursor);
    }
  }
  function hideCursor() {
    tracking = false;
    root.classList.remove('custom-pointer', 'pointer-hover');
    cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
  }
  document.addEventListener('pointermove', event => {
    if (!finePointer.matches || event.pointerType === 'touch') return;
    x = event.clientX;
    y = event.clientY;
    if (!tracking) { ringX = x; ringY = y; }
    tracking = true;
    root.classList.add('custom-pointer');
    root.classList.toggle('pointer-hover', !!event.target.closest('a, button, summary, input, textarea, select'));
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    if (!cursorFrame) cursorFrame = requestAnimationFrame(paintCursor);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', hideCursor);
  window.addEventListener('blur', hideCursor);
  document.addEventListener('keydown', hideCursor);
  finePointer.addEventListener('change', hideCursor);

  const canvas = document.querySelector('.hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const hero = canvas.closest('.hero');
  const toggle = hero.querySelector('.motion-toggle');
  const colors = ['#a181bc', '#ce8da8', '#80aba3', '#c7a35b'];
  let width = 0, height = 0, points = [], animation = 0, lastTime = 0;
  let pointer = null, paused = false, inView = true;
  const canAnimate = () => !paused && !reducedMotion.matches && inView && !document.hidden;
  function size() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(65, Math.max(22, Math.round(width * height / 16000)));
    points = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      radius: 1.4 + Math.random() * 1.6, color: colors[i % colors.length]
    }));
    render(0);
  }
  function render(step) {
    ctx.clearRect(0, 0, width, height);
    for (const point of points) {
      if (step) {
        point.x += point.vx * step;
        point.y += point.vy * step;
        if (pointer && finePointer.matches) {
          const dx = point.x - pointer.x, dy = point.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 110 && distance > 0) {
            const force = (1 - distance / 110) * 2 * step;
            point.x += dx / distance * force;
            point.y += dy / distance * force;
          }
        }
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
        point.x = Math.max(0, Math.min(width, point.x));
        point.y = Math.max(0, Math.min(height, point.y));
      }
    }
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 125) {
          ctx.strokeStyle = `rgba(151, 121, 173, ${(1 - distance / 125) * 0.2})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const point of points) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = point.color;
      ctx.beginPath(); ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function tick(time) {
    animation = 0;
    if (!canAnimate()) { lastTime = 0; return; }
    const step = lastTime ? Math.min((time - lastTime) / 16.67, 2) : 1;
    lastTime = time;
    render(step);
    animation = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(animation);
    animation = 0;
    lastTime = 0;
    toggle.hidden = reducedMotion.matches;
    toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    toggle.setAttribute('aria-pressed', String(paused));
    hero.classList.toggle('motion-paused', paused || reducedMotion.matches);
    if (canAnimate()) animation = requestAnimationFrame(tick);
    else render(0);
  }
  hero.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = hero.getBoundingClientRect();
    pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { pointer = null; });
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', sync);
  new ResizeObserver(size).observe(hero);
  new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }).observe(hero);
  size();
  sync();
})();
