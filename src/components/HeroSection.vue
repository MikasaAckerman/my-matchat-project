<template>
    <section class="hero" ref="heroSection">
      <img ref="heroImage" src="../assets/hero-bg.jpg" alt="Hero Image" class="hero-bg-image">
      <div class="hero-scrim"></div>
      <canvas ref="particleCanvas" class="hero-particles"></canvas>
      <div class="hero-content">
        <h1 class="hero-title">MatChat</h1>
      </div>
      <span class="hero-bg-text">へようこそ</span>
      <div class="scroll-indicator" aria-hidden="true">
        <span class="scroll-indicator-line"></span>
        SCROLL
      </div>
    </section>
  </template>

  <script>
  export default {
    name: 'HeroSection',
    methods: {
    handleScroll() {
      const offset = window.scrollY; // 获取页面垂直滚动的距离
      this.$refs.heroImage.style.top = `${-offset * 0.2}px`;
    },
    // 粒子ネットワークの描画（テック感の演出）
    initParticles() {
      const canvas = this.$refs.particleCanvas;
      const ctx = canvas.getContext('2d');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      resize();
      this.onParticleResize = resize;
      window.addEventListener('resize', resize);

      const count = Math.min(70, Math.floor(canvas.width / 22));
      const particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.6,
      }));

      const LINK_DIST = 130;

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(143, 208, 109, 0.55)';
          ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < LINK_DIST) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(79, 216, 196, ${(1 - dist / LINK_DIST) * 0.35})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        this.particleFrameId = requestAnimationFrame(draw);
      };

      if (reduceMotion) {
        draw();
        cancelAnimationFrame(this.particleFrameId);
      } else {
        draw();
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.initParticles();
  },
  beforeUnmount() { // Vue 3 的生命周期钩子，用于清理
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.onParticleResize);
    cancelAnimationFrame(this.particleFrameId);
  }
  };
  </script>

  <style scoped>

  .hero {
    width: 100%;
    height: calc(100vh);
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafbf5;
    position: relative;
    overflow: hidden;
  }

  .hero-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: top 0.2s ease-out;
  }

  /* 画像の上に薄いスクリムを重ねて文字の可読性を上げる */
  .hero-scrim {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(14, 34, 41, 0.35) 0%, rgba(14, 34, 41, 0.05) 40%, rgba(14, 34, 41, 0.45) 100%);
    pointer-events: none;
  }

  .hero-particles {
    position: absolute;
    inset: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 4;
    text-align: center;
  }

  .hero-title {
    font-size: clamp(4rem, 13vw, 12rem);
    line-height: 1.05;
    margin: 10px 0;
    background: linear-gradient(120deg, #a5e284 0%, #73a85a 45%, #4fd8c4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 6px 24px rgba(14, 34, 41, 0.35));
  }

  .hero-bg-text {
    position: absolute;
    bottom: 4.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    color: #eafff2;
    padding: 10px;
    font-size: 2rem;
    letter-spacing: 0.2em;
    text-shadow: 0 2px 12px rgba(14, 34, 41, 0.6);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    color: rgba(234, 255, 242, 0.85);
    font-size: 0.65rem;
    letter-spacing: 0.4em;
    text-indent: 0.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .scroll-indicator-line {
    display: block;
    width: 1px;
    height: 34px;
    background: linear-gradient(180deg, rgba(234, 255, 242, 0), rgba(143, 208, 109, 0.9));
    animation: scroll-pulse 2s ease-in-out infinite;
  }

  @keyframes scroll-pulse {
    0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
    40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
    100% { transform: scaleY(1) translateY(10px); opacity: 0; }
  }
  </style>
