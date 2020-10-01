<template>
<header>
  <div class="header-inner">
    <div id="ks">
      <h1>KS</h1>
    </div>
<!--
    <ul id="nav">
        <li v-for='nav in navs' :key='nav.id' :class='{"active-item": currentItem === nav.id}'>
        <nuxt-link :to="nav.slug" class="hoverable">{{ nav.name }}</nuxt-link>
      </li>
    </ul> -->
  </div>
</header>
</template>

<script>
  export default {

    data() {
      return {
        cool: "",
        navs: [
          { name: 'home', slug: '/', id: 1 },
          { name: 'about' , slug: 'about' , id: 2 },
          { name: 'whatever' , slug: 'whatever' , id: 3 }
        ],
        currentNav: this.$router.currentRoute,
        currentItem: 3,

      }
    },  mounted () {
  document.addEventListener("keyup", this.nextItem);

  },
  methods: {
    	nextItem (currentNumber) {
      	if (event.keyCode == 37 && this.currentItem > 1) {
        	this.currentItem--

          this.$router.push({
              path: this.navs[this.currentItem - 1].slug
          })
        } else if (event.keyCode == 39 && this.currentItem < 3) {
        	this.currentItem++

            this.$router.push({
                path: this.navs[this.currentItem - 1].slug
            })
        }
      },
      getCurrent() {
      for (var i = 0; i < this.navs.length; i++) {
          if (this.navs[i].slug === this.$router.currentRoute) {
            this.currentItem = this.navs[i];
              return this.navs[i];
          }
      }
      return null;
    }
  }
}

</script>

<style>

#ks {
  left: var(--line-1);
  position: absolute;
}


header {
  z-index: 100;
  top: 60px;
  position: fixed;
}

@media only screen and (max-width: 680px) {
  header  {
    margin-left: 20px;
    margin-right: 20px;
  }
 }

.header-inner {
  position: relative;
/*  width: 100vw; */
  height: 60px;
}
#nav {
  display: flex;
  top: 0;
  width: var(--line-3);
  right: var(--line-1);
  color: white;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 0;
  z-index: 100;
  list-style: none;
  text-decoration: none;
}



#title-name, #title-work, #title-desc {
  margin-top: 20px
}

#title-name {
  position: absolute;
  left: 12.5vw;
  color: #0000FF;
  z-index: 100;
}

#title-work {
  position: absolute;
  left: 37.5vw;
  color: #0000FF;
  z-index: 100;
}

#title-desc {
  position: absolute;
  left:75vw;
  color: #0000FF;
  z-index: 100;
}

#nav a {
    color: white;
    z-index: 100;
  }


</style>
