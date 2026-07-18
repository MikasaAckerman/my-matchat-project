<template>
  <div class="recruit">
    <header class="subpage-header reveal">
      <span class="section-kicker">Recruit</span>
      <h1 class="subpage-title">採用情報</h1>
      <p class="subpage-sub">共に、未来の技術をつくる仲間を募集しています。</p>
    </header>

    <div class="recruit-body">
      <table class="info-table reveal">
        <tbody>
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecruitView',
};
</script>

<style scoped>
.recruit {
  background-color: #f6f9f6;
  padding-bottom: 60px;
}

.recruit-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.info-table {
  width: 100%;
  margin: 44px auto 0;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  background: #fff;
  border: 1px solid rgba(48, 81, 88, 0.1);
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(48, 81, 88, 0.08);
  overflow: hidden;
}

.info-table th,
.info-table td {
  padding: 22px 24px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid rgba(48, 81, 88, 0.08);
}

.info-table tr:last-child th,
.info-table tr:last-child td {
  border-bottom: none;
}

.info-table th {
  width: 180px;
  font-weight: 700;
  color: #305158;
  background: linear-gradient(180deg, rgba(143, 208, 109, 0.08), rgba(79, 216, 196, 0.05));
  border-right: 1px solid rgba(48, 81, 88, 0.08);
  white-space: nowrap;
}

.info-table td {
  color: #33454a;
  line-height: 1.9;
}

@media (max-width: 768px) {
  .info-table th {
    width: 120px;
    white-space: normal;
  }

  .info-table th,
  .info-table td {
    padding: 16px 14px;
  }
}
</style>
