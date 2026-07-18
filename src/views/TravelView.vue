<template>
  <div class="travel-embed">
    <iframe
      ref="travelFrame"
      class="travel-iframe"
      src="travel.html"
      frameBorder="0"
      scrolling="no"
      @load="resizeIframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'TravelView',
  mounted() {
    // 画面リサイズ時も高さを再計算
    this.onResize = () => this.resizeIframe();
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    resizeIframe() {
      const iframe = this.$refs.travelFrame;
      if (!iframe || !iframe.contentWindow) return;

      const doc = iframe.contentWindow.document;
      if (!doc || !doc.body) return;

      this.injectEmbedStyles(doc);

      // position:fixed の .loader が documentElement.scrollHeight を実コンテンツより
      // 大きく膨らませ、事業内容の上に大きな余白を生む。実コンテンツ（main）の
      // 高さ、なければ body.scrollHeight を基準にする。
      const main = doc.querySelector('main');
      const height = main
        ? main.offsetTop + main.offsetHeight
        : doc.body.scrollHeight;

      iframe.style.height = `${height}px`;
    },
    injectEmbedStyles(doc) {
      if (doc.getElementById('embed-travel-overrides')) return;

      const style = doc.createElement('style');
      style.id = 'embed-travel-overrides';
      style.textContent = `
        .anker { padding-top: 0 !important; margin-top: 0 !important; }
        .pagetop { display: none !important; }
        .container_100 { padding-bottom: 0 !important; }
      `;
      doc.head.appendChild(style);
    }
  }
};
</script>

<style scoped>
.travel-embed {
  width: 100%;
  /* travel コンテンツ（ABOUT US は白背景）と「事業内容」セクションの間の余白。
     上の ABOUT US と同じ白にして色の段差をなくす。 */
  padding-bottom: 44px;
  background-color: #ffffff;
}

.travel-iframe {
  width: 100%;
  display: block;
  border: 0;
}
</style>
