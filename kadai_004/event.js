  // ロード完了時に「loadイベントが発生しました」をコンソールに出力
  $(window).on('load', () => {
    console.log('loadイベントが発生しました');
  });
  
$(function(){
  // スクロール時に「scrollイベントが発生しました」をコンソールに出力
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});