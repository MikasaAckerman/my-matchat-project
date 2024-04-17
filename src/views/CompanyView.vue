<template>
  <div class="company">
    <div class="app-image">
      <img ref="companyImage" src="../assets/company.png" alt="Company Image" style="width: 100%; height: auto; position: relative; top: 0; left: 0; z-index: 1;">
    </div>
    <table class="info-table">
      <tr>
        <th>社名</th>
        <td>MatChat株式会社</td>
      </tr>
      <tr>
        <th>所在地</th>
        <td>〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C</td>
      </tr>
      <tr>
        <th>電話</th>
        <td>070-9115-2458</td>
      </tr>
      <tr>
        <th>資本金</th>
        <td>300万円</td>
      </tr>
      <tr>
        <th>代表取締役社長</th>
        <td>王 渊博</td>
      </tr>
      <tr>
        <th>設立</th>
        <td>2024年4月</td>
      </tr>
      <tr>
        <th>事業内容</th>
        <td>
          ·モバイルアプリケーション、システムの設計、開発、保守の提案及びコンサルティング<br>
          ·オンラインサービス運営<br>
          ·ソフトウェア開発技術者の教育、各種研修・セミナーの企画・運営
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CompanyView',
  // 如果需要，这里可以添加JavaScript逻辑
};
</script>

<style scoped>
.info-table {
  border-collapse: collapse;
  margin: 100px auto; /* 在此设置上下的间距为20px，左右自动居中 */
  table-layout: auto;
  max-width: 90%;
}

.info-table th, .info-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  vertical-align: top;
}

.info-table th {
  background-color: #f2f2f2;
}



</style>
