
console.log('test');

import './main.min'
import { showModal,centeringModal } from './modalwindow'
// import './codepen'
// import './script'

console.log('test');

/*
const sample = new Sample({
  elements: [ ...document.querySelectorAll('.js-target') ],
  classNameActive: 'is-active'
})
setTimeout(() => {
  sample.activate()
}, 500)
*/

//モーダルを閉じる
$(document).on("click", ".co-modal-overlay,#co-modal-close", function () {
	$(".co-modal-content,.co-modal-overlay").fadeOut("slow");
	$('co-modal-text').text();
});

$('.js-game-1').on('click',function(){
  showModal('js','いつ？誰と？何する？！ゲーム！','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="PgWbgE" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="When?Who?What?GAME!!"><span>See the Pen <a href="https://codepen.io/szaizen/pen/PgWbgE/">When?Who?What?GAME!!</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-game-2').on('click',function(){
  showModal('js','おみくじ','<p class="codepen" data-theme-id="0" data-default-tab="css,result" data-user="szaizen" data-slug-hash="wZPXpR" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="wZPXpR">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/wZPXpR/">  wZPXpR</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-game-3').on('click',function(){
  showModal('js','NumerOn','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="gyXKKd" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="NumerOn">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/gyXKKd/">  NumerOn</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-study-1').on('click',function(){
  showModal('js','ボタン無効化','<p class="codepen" data-theme-id="0" data-default-tab="css,result" data-user="szaizen" data-slug-hash="JVMzQB" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="js課題1">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/JVMzQB/">  js課題1</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-study-2').on('click',function(){
  showModal('js','DOM操作','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="ZZvZNm" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="js課題2">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/ZZvZNm/">  js課題2</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-study-3').on('click',function(){
  showModal('js','Ajax、Cookie','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="xepNMR" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="js課題3">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/xepNMR/">  js課題3</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.work--card-1').on('click',function(){
 showModal('work','','','https://aw-anotherworks.com/','anotherworks.png','「Another works」LP','開発内容：ランディングページを作成<br>開発期間：約3日');
});

$('.work--card-2').on('click',function(){
 showModal('work','','','https://anotherworks.co.jp/aw/','anotherworks_aw.png','「AW by Anotherworks」／ 複業に関するメディア','開発人数：1名<br>使用ツール：Wordpress<br>開発内容：コーディング・SEO対策・移行から運用、保守まで一人で担当<br>開発期間：約1ヶ月半');
});

$('.work--card-3').on('click',function(){
 showModal('work','','','https://systems.pasonatech.co.jp/','pasonatechsystems.png','「パソナテックシステムズ」／コーポレートサイトリニューアル','担当分野：メインデザイン、フロント開発<br>使用ツール：Wordpress,asana,slack,AdobeXD<br>開発内容：プロトタイプを作成し、デザインの考案。サイト内に使用する写真の選別。HTML,CSSやプラグインを使用してフロントのスタイル調整。<br>開発期間：約3か月間');
});

$('.work--card-4').on('click',function(){
 showModal('work','','','music_pc.png','「M:usic」／ 音楽販売風サイト（勉強用）','プロジェクト人数：1名<br>使用ツール：Salesforce<br>開発内容：Apex、Visualforceをフルスクラッチ開発し、ログイン機能・ユーザ登録機能・カート機能を実装。<br>開発期間：約1か月間<br>');
});

$('.work--card-5').on('click',function(){
 showModal('work','','','https://systems.pasonatech.co.jp/','enclass.png','コミュニティ「Enclass」／ ブログ、イベント','プロジェクト人数：3名<br> 担当分野：フロントエンド開発<br> 使用ツール：Wordpress、Backlog、Slack<br>開発内容：一からWordpressのカスタムテーマを作成。 </p>  </div></div>');
});
