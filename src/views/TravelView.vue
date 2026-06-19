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

      const height = Math.max(
        doc.body.scrollHeight,
        doc.documentElement ? doc.documentElement.scrollHeight : 0
      );

      iframe.style.height = `${height}px`;
    },
    injectEmbedStyles(doc) {
      if (doc.getElementById('embed-travel-overrides')) return;

      const style = doc.createElement('style');
      style.id = 'embed-travel-overrides';
      style.textContent = `
        .anker { padding-top: 0 !important; margin-top: 0 !important; }
        .pagetop { display: none !important; }
        .index01 { padding-bottom: 40rem !important; }
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
}

.travel-iframe {
  width: 100%;
  display: block;
  border: 0;
}
</style>
