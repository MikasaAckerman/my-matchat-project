<template>
  <footer class="site-footer">
    <div class="footer-background">
      <canvas id="waveCanvas"></canvas>
      <div class="footer-content">
        <div class="footer-left">
          <h2>MatChat</h2>
          <p class="copyright">&copy; {{ new Date().getFullYear() }} MatChat. All rights reserved.</p>
        </div>
        <div class="footer-right">
          <h2>お問い合わせ</h2>
          <p>Email: contact@matchat.com</p>
          <p>Address: 1234 Street Name, City</p>
        </div>
      </div>
    </div>
  </footer>
</template>

  
<script>
export default {
  name: 'FooterSection',
  mounted() {
    this.drawWave();
  },
  methods: {
    drawWave() {
      const canvas = document.getElementById('waveCanvas');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = 20; // 根据需要调整

      let waveHeight = 10; // 波浪高度
      let speed = 0.05; // 波浪速度
      let waveLength = 250; // 波长
      let yOffset = waveHeight; // Y轴偏移量，调整以适应你的footer高度

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, yOffset);

        // 绘制波浪，使用 waveLength 调整波长影响
        for (let i = 0; i < canvas.width; i++) {
          // 修改 Math.sin 的参数来让波浪倒置并且使用 waveLength
          ctx.lineTo(i, yOffset + Math.sin(i / waveLength + speed) * waveHeight);
        }

        ctx.lineTo(canvas.width, 0); // 修改终点为画布顶部
        ctx.lineTo(0, 0); // 完成闭合路径
        ctx.fillStyle = '#fff'; // 波浪颜色
        ctx.fill();
        speed += 0.01; // 调整这个值改变动画速度
      }

      animate();
    },
  },
};
</script>
  
  <style scoped>
.site-footer {
  overflow: hidden; /* 防止波浪动画溢出footer */
  position: relative;
  background-image: url('@/assets/footer.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
}

.footer-background {
  backdrop-filter: blur(10px);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-left: 60px;
  padding-right: 60px;
  color: #ffffff; /* 保证文本可读性 */
}

.footer-left h2, .footer-left p, .footer-right h2, .footer-right p {
  margin: 8px;
}

.footer-right h2 {
  padding-top: -20px;
}

.footer-right p {
  text-align: left;
  margin-right: 00px; /* 根据需要调整 */
  margin-left: 00px;
}

@media (max-width: 600px) {
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff; /* 保证文本可读性 */
  font-size: 0.5rem;
}

.footer-left h2, .footer-left p, .footer-right h2, .footer-right p {
  margin: 8px;
}

}
</style>
  