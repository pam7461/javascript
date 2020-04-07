function bmiCalc(){
  var key,mom,bmi,panjung;
  key=document.querySelector('#user_height').value;
  mom=document.querySelector('#user_widht').value;
  key/=100;
  bmi=mom / (key**2);
  panjung=bmi<=25?'정상':'정상초과';

  var outPut=document.querySelector('.panjung');
  outPut.innerHTML='당신의 체질량지수 측정결과는 <b>'+panjung+'</b>입니다.';      
}