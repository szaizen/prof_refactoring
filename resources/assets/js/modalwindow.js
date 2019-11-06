
/*
関数概要：モーダルを表示する処理
引数：modaltitle：タイトル, modalcontent：表示内容のテキスト
*/

export function showModal(modaltitle,modalcontent){
	if($(".co-modal-overlay")[0]) return false ;//新しくモーダルウィンドウを起動しない

	$('body').append(
	  $('<div>').addClass('co-modal-content').append(
	    $('<div>').addClass('co-modal-title').text(modaltitle),
	    $('<p>').addClass('co-modal-text').html(modalcontent),
	    $('<a>').attr('id','co-modal-close').addClass('co-modal-close_icon')
	  ),
	  $('<div>').addClass('co-modal-overlay')
	)
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
