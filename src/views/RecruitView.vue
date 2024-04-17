<template>
  <div class="recruit">
    <table class="info-table">
      <tr>
        <th>募集職種</th>
        <td>
          [開発職(SE/PM/PL/PG等ITエンジニア)]<br>
各種システムの企画、提案、要件定義、設計、開発、保守<br>
－モバイルアプリ開発(iOS/Android)<br>
－車載システム開発(C/C++/Java、iTron/組込Linux/Android/WinCE)<br>
－組込みシステム開発(OSポーティング、BSP開発、ミドルウェア開発、デバイスドライバー開発、ファームウェア開発)<br>
－Webシステム開発(金融/流通/生産管理等、Java/HTML5/JS等)<br>
－IoT基盤、ビックデータ基盤、Cloud環境構築<br>
－各種先端技術関連企画、開発(AI、ブロックチェーン、量子コンピューティング)
      </td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>東京、都内近郊</td>
      </tr>
      <tr>
        <th>募集人数</th>
        <td>若干名</td>
      </tr>
      <tr>
        <th>雇用形態</th>
        <td>正社員、契約社員(応相談)</td>
      </tr>
      <tr>
        <th>待遇</th>
        <td>
          給与／大卒、大学院、経験年数等により決定<br>
賞与／年２回(別途業績連動賞与支給)<br>
昇給／年１回<br>
休日／土、日、祝日、会社指定日<br>
有給休暇／勤続６ヶ月で10日、最高20日<br>
福利厚生／各種保険、社員旅行他
        </td>
      </tr>
      <tr>
        <th>応募方法</th>
        <td>履歴書を添付してメールで応募</td>
      </tr>
      <tr>
        <th>問い合わせ先</th>
        <td>
          Email: recruit@matchat.co.jp
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RecruitView',
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
