
 // function 
 function calculateBmi(){
  // get Values
  let weight=document.getElementById('weight').value 
  let height=document.getElementById('height').value 


  // formula
   let bmi=(weight / (height*height));
   bmi=bmi*10000; // kg/m^2

   document.getElementById('heading').innerHTML='Your BMI is : '
   document.getElementById('bmi-output').innerHTML=bmi.toFixed(2);
 
   if(bmi<18.5){
    document.getElementById('message').innerHTML='You are underweight'
   }else if(bmi>=18.5 && bmi<25){
    document.getElementById('message').innerHTML='You are a healthy weight'
   } else {
    document.getElementById('message').innerHTML='You are overweight'
   }

 }
 function reload(){
    window.location.reload()
 }