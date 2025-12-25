
addEventListener('mousemove',(e)=>{
  
    document.body.style.setProperty( '--x' ,  e.clientX+'px');
    document.body.style.setProperty( '--y' ,e.clientY+'px')
    
})


const h1 = document.querySelector('#system');
const h2 = document.querySelector('#access');
const p = document.querySelector('#welcome');


const h1Text = h1.innerHTML
const h2Text = h2.innerHTML
const para = p.innerHTML
const charater = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let i = 0;

function randomTextH1(){

   i = 0; 
  const interval =  setInterval(()=>{

    const str =  h1Text.split('').map((char,idx)=>{
    if(i>=idx){
        return char
    }
    return charater.split('')[Math.floor(Math.random()*52)];
   }).join("");


   h1.innerHTML = str;

   i += 0.25;

   console.log(str);

   if(i>=h1Text.length){
    clearInterval(interval);
    h1Text.innerHTML = h1Text;

   }


   },30)
}

function randomTextH2(){

   i = 0; 
  const interval =  setInterval(()=>{

    const str =  h2Text.split('').map((char,idx)=>{
    if(i>=idx){
        return char
    }
    return charater.split('')[Math.floor(Math.random()*52)];
   }).join("");


   h2.innerHTML = str;

   i += 0.25;

   console.log(str);

   if(i>=h2Text.length){
    clearInterval(interval);
    h2Text.innerHTML = h2Text;

   }


   },30)
}

function randomTextP(){

   i = 0; 
  const interval =  setInterval(()=>{

    const str =  para.split('').map((char,idx)=>{
    if(i>=idx){
        return char
    }
    return charater.split('')[Math.floor(Math.random()*52)];
   }).join("");


   p.innerHTML = str;

   i += 0.25;

   console.log(str);

   if(i>=para.length){
    clearInterval(interval);
    p.innerHTML = para;

   }


   },30)
}


h1.addEventListener('mouseenter',randomTextH1)


h2.addEventListener('mouseenter',randomTextH2)

p.addEventListener('mouseenter', randomTextP)



