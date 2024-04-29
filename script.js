const main=document.querySelector('.main');
const loader=document.querySelector('.loader');
const back=document.querySelector('.back');

let i=0;

function blur(){
  if(i===0){
    i=1;
    let step=1;
    let blurStep=100;
    let percent=setInterval(frame,50);
    function frame(){
        if(step>=100){
            clearInterval(percent);
            i=0;
            blurStep=100;l
        }else{
            step++;
            blurStep--;
            loader.style.opacity=1-step/100;
            back.style.opacity=0.7-step/100;
            loader.innerText=`${100-step}%`;
            main.style.filter=`blur(${(blurStep*2)/20}px)`;
        }
    }
  }
}

window.addEventListener('load',blur)