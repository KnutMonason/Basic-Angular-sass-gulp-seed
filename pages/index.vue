<template>
      <div class="container">
      <hero/>
      <work/>
      <feeter/>
          
          
      </div>
</template>

<script>
    import hero from '@/components/hero.vue';
    import work from '@/components/work.vue';
    import feeter from '@/components/footer.vue';
  
  
  export default {  
    components: {
      hero,
      work,
      feeter,
    },
mounted() {
    this.$nextTick(
      function() {                          
        this.initLocomotive();
        setTimeout(function(){
            this.lmS.update();
        }, 1000);  
      }.bind(this)
    );
  },
  watch: {
      $route() {
        console.log("who route changed: ", this.$route);
        //this.lmS.update();
      }
  },
  destroyed() {
      window.lmS.destroy();
    },
  methods: {
      initLocomotive(){
          window.lmS = new this.locomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true /* if false disable overflow: hidden on html, body */,
          });
      },
      onLmsScroll(obj) {
        this.scrollPosition = obj["scroll"]["y"];
        console.log("scrollPosition + na", this.scrollPosition);
      },
      onLmsResize() {
        this.lmS.update();
      }
    }
  }
</script>

<style>


section {
  position: relative;
  min-height: 50vh;
  display: inline-block;
  vertical-align: top;
  padding-top: 20vh; 

}

@media only screen and (max-width: 680px) {
  section, .footer__inner {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }

 }

.o-title.is-inview .o-title_line {
  transform: none;
  opacity: 1;
}

.o-title_line {
  display: block;
  opacity: 0;
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateY(100%) rotateX(-80deg);
  transition: opacity .8s cubic-bezier(.215,.61,.355,1), transform .8s cubic-bezier(.215,.61,.355,1);
}

.o-title.is-inview .o-title_line:first-child {
    transition-delay: .4s
}

.o-title.is-inview .o-title_line:nth-child(2) {
    transition-delay: .5s
}

.o-title.is-inview .o-title_line:nth-child(3) {
    transition-delay: .6s
}

.o-title.is-inview .o-title_line:nth-child(4) {
    transition-delay: .7s
}



</style>
