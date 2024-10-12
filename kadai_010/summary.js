$(function(){
  // 文字色変化のボタンを押すと
  $('#change-color').on('click',function(){
    // 文字の色が変化する
    $('#target').css('color','orange');
  });

  // 文字内容変化のボタンを押すと
$('#change-text').on('click',function(){
  // 文字の色が変化する
  $('#target').text('Hello!!');
  });

  // フェードアウトのボタンを押すと
$('#fade-out').on('click',function(){
    // 文字の色が変化する
    $('#target').fadeOut();
  });

  // フェードインのボタンを押すと
  $('#fade-in').on('click',function(){
    // 文字の色が変化する
    $('#target').fadeIn();
  });
})