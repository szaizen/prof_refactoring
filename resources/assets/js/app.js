
console.log('test');

import './main.min'
import { showModal,centeringModal } from './modalwindow'
// import './codepen'
import './script'

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
	$(".co-modal-content,.co-modal-overlay").fadeOut("slow",function(){
		$(this).remove();
	});
});

$('.js-game-1').on('click',function(){
  showModal('いつ？誰と？何する？！ゲーム！','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="PgWbgE" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="When?Who?What?GAME!!"><span>See the Pen <a href="https://codepen.io/szaizen/pen/PgWbgE/">When?Who?What?GAME!!</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-game-2').on('click',function(){
  showModal('おみくじ','<p class="codepen" data-theme-id="0" data-default-tab="css,result" data-user="szaizen" data-slug-hash="wZPXpR" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="wZPXpR">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/wZPXpR/">  wZPXpR</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-game-3').on('click',function(){
  showModal('NumerOn','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="gyXKKd" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="NumerOn">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/gyXKKd/">  NumerOn</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-study-1').on('click',function(){
  showModal('ボタン無効化','<p class="codepen" data-theme-id="0" data-default-tab="css,result" data-user="szaizen" data-slug-hash="JVMzQB" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="js課題1">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/JVMzQB/">  js課題1</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-study-2').on('click',function(){
  showModal('DOM操作','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="ZZvZNm" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="js課題2">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/ZZvZNm/">  js課題2</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.js-study-3').on('click',function(){
  showModal('Ajax、Cookie','<p class="codepen" data-theme-id="0" data-default-tab="js,result" data-user="szaizen" data-slug-hash="xepNMR" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="js課題3">  <span>See the Pen <a href="https://codepen.io/szaizen/pen/xepNMR/">  js課題3</a> by szaizen (<a href="https://codepen.io/szaizen">@szaizen</a>)  on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>');
});

$('.work--card-5').on('click',function(){
 showModal('','<div class="work--list-modal">   <div class="work--list-left">    <img src="assets/images/display.png" class="image--display display--pc"><img src="assets/images/display-sp.png" class="image--display display--sp">    <div class="image--pc">      <img src="assets/images/enclass.png" class="image--scroll">    </div>  </div>  <div class="work--list-right">    <p class="work--list-title"> コミュニティ「Enclass」／ ブログ、イベント </p>    <p class="work--list-detail"> プロジェクト人数：3名<br> 担当分野：フロントエンド開発<br> 使用ツール：Wordpress、Backlog、Slack<br>開発内容：一からWordpressのカスタムテーマを作成。 </p>  </div></div>');
});

$('.work--card-3').on('click',function(){
 showModal('','<div class="work--list-modal">  <div class="work--list-left">    <img src="assets/images/display.png" class="image--display display--pc"><img src="assets/images/display-sp.png" class="image--display display--sp">    <div class="image--pc">      <img src="assets/images/pasonatechsystems.png" class="image--scroll">    </div>  </div>  <div class="work--list-right">    <p class="work--list-title">      「パソナテックシステムズ」／コーポレートサイトリニューアル    </p>    <p class="work--list-detail">      URL：<a href=" https://systems.pasonatech.co.jp/" target="_blank">https://systems.pasonatech.co.jp/</a><br>      担当分野：メインデザイン、フロント開発<br>      使用ツール：Wordpress,asana,slack,AdobeXD<br>      開発内容：プロトタイプを作成し、デザインの考案。サイト内に使用する写真の選別。HTML,CSSやプラグインを使用してフロントのスタイル調整。<br>      開発期間：約3か月間<br>    </p>  </div></div>');
});

$('.work--card-4').on('click',function(){
 showModal('','<div class="work--list-modal">  <div class="work--list-left">    <img src="assets/images/display.png" class="image--display display--pc"><img src="assets/images/display-sp.png" class="image--display display--sp">    <div class="image--pc">      <img src="assets/images/music_pc.png" class="image--scroll">    </div>  </div>  <div class="work--list-right">    <p class="work--list-title">      「M:usic」／ 音楽販売風サイト（勉強用）    </p>    <p class="work--list-detail">      プロジェクト人数：1名<br>      使用ツール：Salesforce<br>      開発内容：Apex、Visualforceをフルスクラッチ開発し、ログイン機能・ユーザ登録機能・カート機能を実装。<br>       開発期間：約1か月間<br>      <a style="margin: 0 10px;" href="https://github.com/szaizen/music" target="_blank">Github</a><a style="margin: 0 10px;" href="https://qiita.com/szaizen/items/83f58c344c4478bb1520" target="_blank">Qiita</a>      </p>  </div></div>');
});

$('.work--card-2').on('click',function(){
 showModal('','<div class="work--list-modal">  <div class="work--list-left">    <img src="assets/images/display.png" class="image--display display--pc"><img src="assets/images/display-sp.png" class="image--display display--sp">    <div class="image--pc">      <img src="assets/images/signpost.png" class="image--scroll">    </div>  </div>  <div class="work--list-right">    <p class="work--list-title">      「Signpost」／ 複業に関するメディア   </p>    <p class="work--list-detail">      URL：<a href="http://signpost.anotherworks.co.jp/" target="_blank">http://signpost.anotherworks.co.jp/</a><br>      開発人数：1名<br>      使用ツール：Wordpress<br>      開発内容：デザイン・コーディング・SEO対策・移行から運用、保守まで一人で担当<br>       開発期間：約1ヶ月半<br>    </p>  </div></div>');
});

$('.work--card-1').on('click',function(){
 showModal('','<div class="work--list-modal">  <div class="work--list-left">    <img src="assets/images/display.png" class="image--display display--pc"><img src="assets/images/display-sp.png" class="image--display display--sp">    <div class="image--pc">      <img src="assets/images/anotherworks.png" class="image--scroll">    </div>  </div>  <div class="work--list-right">    <p class="work--list-title">      「Another works」<br> LP    </p>    <p class="work--list-detail">      URL：<a href="https://aw-anotherworks.com/" target="_blank">https://aw-anotherworks.com/</a><br>      開発内容：ランディングページを作成<br>       開発期間：約3日<br>    </p>  </div></div>');
});
