const button=document.getElementById('btn');
const text1=document.getElementById('text');

button.addEventListener('click',()=>{
  setTimeout(()=>{
    text1.innerHTML='ボタンをクリックしました';
  },2000)
});