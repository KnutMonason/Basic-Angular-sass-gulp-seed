<template>
<div class="newcursor">
  <div class="cursor__ball cursor__ball--big ">
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
    </svg>
  </div>

</div>
</template>

<style>

body .newcursor {
  pointer-events: none;
}
body .cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 1000;
}
body .cursor__ball circle {
  fill: grey;
}


</style>

<script>

  
  let Tweenmax;
  if (process.browser) {
  TweenMax = require("gsap/gsap");
}
//import TweenMax from "gsap"


export default {

mounted() {
const $bigBall = document.querySelector('.cursor__ball--big');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', onScroll);

for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .5, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
}

function onScroll(e) {
  console.log("scrollin");
  TweenMax.to($bigBall, .5, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
}
}


</script>
