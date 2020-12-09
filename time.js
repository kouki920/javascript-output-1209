'use strict;'

window.onload = function(){
  let time = 180;
  let counter;
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');
  let start = document.getElementById('start__button');
  let stop = document.getElementById('stop__button');
  let reset = document.getElementById('reset__button');

  start.addEventListener('click',()=>{
    toggle();
    counter = setInterval(count,1000);
  })

  stop.addEventListener('click',() => {
    toggle();
    clearInterval(counter);
  })

  reset.addEventListener('click',()=>{
    time = 180;
    sec.textContent = time % 60;
    min.textContent = Math.floor( time / 60 );
  })

  function toggle() {
    if( start.disabled ) {
     start.disabled = false;
     stop.disabled = true;
   } else {
     start.disabled = true
     stop.disabled = false;
     }
   }
   function count() {
    if( time === 0 ) {
    sec.innerHTML = 0;
    min.innerHTML = 0;
    toggle();
    alert("3分経過しました!!");
    clearInterval( counter );
    } else {
    time -= 1;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor( time / 60 );
    }
    }

}

