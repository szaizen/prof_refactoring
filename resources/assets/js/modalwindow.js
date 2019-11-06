
/*
関数概要：モーダルを表示する処理
引数：modaltitle：タイトル, modalcontent：表示内容のテキスト
*/

export function showModal(type, title, body, url, image_path, content_title, content_text){
	//if($(".co-modal-overlay")[0]) return false ;//新しくモーダルウィンドウを起動しない
	$(".co-modal-title").text(title);

	$(".co-modal-text").html('');

	if(type === 'work') {

		$(".co-modal-text").append(
			$('<div>').addClass('work--list-modal').append(
				$('<div>').addClass('work--list-left').append(
					$('<img>').addClass('image--display display--pc').attr('src','assets/images/display.png'),
					$('<img>').addClass('image--display display--sp').attr('src','assets/images/display-sp.png'),
					$('<div>').addClass('image--pc').append(
						$('<img>').addClass('image--scroll').attr('src','assets/images/' + image_path)
					)
				),
				$('<div>').addClass('work--list-right').append(
					$('<p>').addClass('work--list-title').text(content_title),
					$('<p>').addClass('work--list-detail').append(
						$('<a>').attr('href',url).attr('target','_blank').text(url),
						$('<p>').html(content_text)
					)
				)
			)
		);

	} else if (type === 'js') {
		$(".co-modal-text").html(body);
	}


	/*
	<div class="work--list-modal">
    <div class="work--list-left">
      <img src="assets/images/display.png" class="image--display display--pc">
      <img src="assets/images/display-sp.png" class="image--display display--sp">
      <div class="image--pc">
        <img src="assets/images/pasonatechsystems.png" class="image--scroll">
      </div>
    </div>
    <div class="work--list-right">
      <p class="work--list-title"> 「パソナテックシステムズ」／コーポレートサイトリニューアル </p>
      <p class="work--list-detail"> URL：<a href=" https://systems.pasonatech.co.jp/" target="_blank">https://systems.pasonatech.co.jp/</a><br> 担当分野：メインデザイン、フロント開発<br> 使用ツール：Wordpress,asana,slack,AdobeXD<br>
        開発内容：プロトタイプを作成し、デザインの考案。サイト内に使用する写真の選別。HTML,CSSやプラグインを使用してフロントのスタイル調整。<br> 開発期間：約3か月間<br> </p>
    </div>
  </div>
*/

	$(".co-modal-overlay").fadeIn();
	$(".co-modal-content").fadeIn();
  centeringModal();

};


//モーダル中央寄せ（中央の位置を計算してleftとTopを設定する）
export function centeringModal(){
	var pxleft = (($(window).width() - $(".co-modal-content").outerWidth()) / 2);
	var pxtop = (($(window).height() - $(".co-modal-content").outerHeight()) / 2);
	$(".co-modal-content").css({"left": pxleft + "px"}).css({"top": pxtop + "px"});
}
