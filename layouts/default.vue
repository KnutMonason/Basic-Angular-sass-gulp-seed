<template>
  <div>
    

  <!--   <grid /> -->
    <mainNav />
    <nuxt id="js-scroll" />
<!--    <mouse />-->
      </div>

</template>


<script>
import Logo from '@/components/Logo.vue'
import mainNav from '@/components/mainNav.vue'
import grid from '@/components/grid.vue'
//import mouse from '@/components/newcursor.vue'

export default {
  components: {
    Logo,
    mainNav,
    grid
  //  mouse
  },
  head: {
    title: 'Knut Sandin'
  }
}

</script>


<style>


html.has-scroll-smooth, html.has-scroll-smooth body{
overflow: hidden;

}

body {
overflow: hidden;
}


#js-scroll {
width: 100vw;
overflow: hidden;
}


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

section {
  animation-name: appearOut;
  animation-duration: .55s;
  animation-fill-mode: forwards;
  animation-delay: .15s;
  opacity: 0;

}


@keyframes appearOut {
    0% {
        opacity: 0;
        transform: translate3d(0,-5px,-5px);
        transform: scale3d(.96,.96,.96)
    }

    to {
        transform: translateZ(0);
        opacity: 1
    }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
