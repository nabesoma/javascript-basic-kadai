let num=75;

let num2=num%3;
let num3=num%5;

if(num2===0 && num3===0){
  console.log('3と5の倍数です');
}

else if(num2===0){
  console.log('3の倍数です');
}

else if(num3===0){
  console.log('5の倍数です');
}

else{
  console.log(num);
}
