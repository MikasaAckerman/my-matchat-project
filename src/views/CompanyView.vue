<template>
  <div class="company">
    <h1>我们的公司</h1>
    <p>欢迎来到我们的公司页面！我们是一家致力于提供优质服务的公司。</p>
    <h2>我们提供的服务</h2>
    <ul>
      <li>高质量的产品</li>
      <li>24/7 客户支持</li>
      <li>可持续发展和创新</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CompanyView',
  // 如果需要，这里可以添加JavaScript逻辑
};
</script>

<style scoped>
.company {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
}

p {
  color: #666;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 5px 0;
}
</style>
