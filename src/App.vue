<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // .reveal が付いた要素をスクロールで順次表示させる
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        this.revealObserver.observe(el);
      });
    };
    observeAll();

    // ルート遷移などで後から追加された要素も対象にする
    this.domObserver = new MutationObserver(observeAll);
    this.domObserver.observe(this.$el, { childList: true, subtree: true });
  },
  beforeUnmount() {
    this.revealObserver?.disconnect();
    this.domObserver?.disconnect();
  }
}
</script>

<style>
:root {
  color-scheme: light;
  --brand-green: #73a85a;
  --brand-green-bright: #8fd06d;
  --accent-cyan: #4fd8c4;
  --deep-teal: #305158;
  --deep-navy: #0e2229;
  --ink: #22333a;
  --surface: #f6f9f6;
  --tech-gradient: linear-gradient(120deg, #8fd06d 0%, #4fd8c4 55%, #56b4d3 100%);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--surface);
}

#app {
  font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--ink);
  margin-top: 0px;
}

/* --- スクロール進場アニメーション --- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* --- セクション見出しの共通スタイル --- */
.section-kicker {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  background: var(--tech-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 6px;
}

.section-heading {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  margin: 0 0 12px;
  letter-spacing: 0.08em;
}

.section-heading::after {
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  border-radius: 3px;
  margin: 14px auto 0;
  background: var(--tech-gradient);
}

/* --- 下層ページ（会社概要・採用情報）共通のヘッダーバンド --- */
.subpage-header {
  position: relative;
  padding: 120px 20px 48px;
  background:
    radial-gradient(ellipse 80% 60% at 15% 0%, rgba(79, 216, 196, 0.16), transparent),
    radial-gradient(ellipse 70% 60% at 95% 100%, rgba(143, 208, 109, 0.12), transparent),
    linear-gradient(160deg, #0e2229 0%, #16333c 60%, #1d3f45 100%);
  color: #f2fbf1;
  overflow: hidden;
}

.subpage-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(143, 208, 109, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(143, 208, 109, 0.06) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
}

.subpage-header > * {
  position: relative;
}

.subpage-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin: 6px 0 10px;
  letter-spacing: 0.1em;
}

.subpage-sub {
  margin: 0;
  color: #a5e284;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
}

.subpage-title::after {
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  border-radius: 3px;
  margin: 18px auto 0;
  background: var(--tech-gradient);
}
</style>
