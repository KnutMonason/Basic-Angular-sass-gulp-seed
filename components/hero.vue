<template>
  <section class="intro" >
      <h1 class="intro__title">
        I produce and code websites,
        helping businesses build a 
        <span class="--green">solid digital presence. </span>
      </h1>
    <div class="puff-row">
      <div class="puff --first">
        <div class="puff__inner">
          <div class="puff__column">
            <h2 class="puff__text">My name is Knut Sandin, <br>
            a technology and design entusiast based in Åre, Sweden.</h2>
          <!--  <a href="#" class="puff__link">Read more about me</a>-->
            <!--  <nuxt-link :to="about" class="puff__link">Read more about me</nuxt-link>-->
          </div>
        </div>
      </div>
      
      <div class="puff --second">
        <div class="puff__inner">
          <div class="puff__column">
            <h2 class="puff__text">Currently working at 
              Åre Hjärtat developing web for outdoor oriented brands like MIPS,
               WC2020, RECCO and 7MESH</h2>
          <!--  <a href="#" class="puff__link">Read more about me</a> -->
            <!--  <nuxt-link :to="about" class="puff__link">Read more about me</nuxt-link>-->
          </div>
          <div class="puff__column">
          <!--  <img class="puff__image" src="https://via.placeholder.com/150" alt="">-->
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style>


.intro {
  min-height: 80vh;
  margin-left: var(--line-2);
  width: var(--line-6);
  
}

@media only screen and (max-width: 680px) { 
  .intro {
    margin-left: var(--line-1);
    width: auto;
    min-height: 300px;
    margin-bottom: 20px;
  }
}

.intro__title {
  font-family: var(--secondary-font);
  padding-top: 2vw;
  font-size: 3.4vw;
  font-weight: bold;
  width: var(--line-7)
}

@media only screen and (max-width: 680px) { 
  .intro__title {
    font-size: 30px;
    width: auto;
    margin-right: var(--line-1);
    margin-bottom: 50px;
  }
}

.intro__title .--green {
  color: var(--green);
}

.puff-row {
  display: flex;
width: var(--line-10);
margin-top: 5vw;
    justify-content: space-between;
}

@media only screen and (max-width: 880px) { 
  .puff-row {
      display: block!important;
  }
 }
 
 @media only screen and (max-width: 880px) { 
    .puff__text {
       width: auto !important;
       font-size: 20px;
   }
  }
  

 


.puff__inner {
  display: flex;
  
}

.puff {
  margin-top: 3vw;
  bottom: 0;
  display: inline-block;
  width: var(--line-4);
  min-height: 6vw;
}

@media only screen and (max-width: 880px) { 
  .puff {
      display: block!important;
      width: auto!important;
  }
 }


.puff.--first {
  
  width: var(--line-3);
}

.puff.--second {
  width: var(--line-5);
  color: var(--medium);
  
}

.puff__text {
    width: var(--line-3);
    min-height: 12vw;
}


.intro img {
  max-width: 100%;
  height: auto;
}

.intro-text {
  min-height: 100vh; 
  margin-left: var(--line-1);
  width: var(--line-5);

}

.puff__link {
  color: white;
  font-size: 1.5vw;
}

.intro-text h5 {
  font-size: 6vw;
}

.intro-text p {
  font-size: 2vw;
  margin-top: 1vw;
  
}
  
</style>

<script>
  
</script>