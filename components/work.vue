<template>
  <section class="work">
      <div class="work__header">
        <span class="work__title">
          Recent projects
        </span>
        <span class="work__title-span">
          (Web development)
        </span>
      </div>

    <div class="work__featured">
      <a target="_blank" href="https://hemra.se/">Hemra</a>
      <a target="_blank" href="https://hjartat.net/">Åre Hjärtat</a>
      <a target="_blank" href="https://allergiexperterna.se/">Allergiexperterna</a>
      <a target="_blank" href="https://mipsprotection.com/">MIPS Protection</a>
      <a target="_blank" href="https://skiersaccredited.com/">Skiers Accredited</a>
      



    <!--  <span class="disabled">Recco <span>(Internal digital workbook)</span> </a>-->

    </div>
    
    <div class="work__sub-header">
      <span class="work__sub-title">
        Other agency projects
      </span>
      <span class="work__sub-year">
        (2017 - now)
      </span>
    </div>
      <div class="work__sub-container">

        <div class="work__sub-projects">
          <a target="_blank" href="https://www.leoslekland.se/">Leos lekland</a>
        </div>
        
        <div class="work__sub-projects">
          <a target="_blank" href="http://www.lindebergbageriochkonditori.se/">Lindeberg bageri</a>
        </div>
        
        <div class="work__sub-projects">
          <a target="_blank" href="http://ronniepeterson.se/">Ronnie Peterson</a>
        </div>
        

        


        

      </div>
  </section>
</template>

<style>

.work {
  min-height: 100vh;
  margin-left: var(--line-2);
  width: var(--line-10);
}

@media only screen and (max-width: 680px) { 
  .work {
    width: calc(100% - 40px);
    min-height: 300px;
    margin-bottom: 100px;
  }
 }

.work__header {
  border-bottom: 2px solid;
  padding-bottom: 0.5vw;
  margin-bottom: 3vw;
  
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.work__title {
  font-family: var(--secondary-font);
  padding-top: 2vw;
  font-size: 3vw;
  font-weight: bold;
  width: var(--line-7);
  text-transform: uppercase;
}


@media only screen and (max-width: 680px) {
  .work__title {
    width: auto;
    font-size: 20px;
  }  
 }


.work__featured {
  margin-bottom: 5vw;
}

.work__featured a {
    font-size: 2vw;
    font-weight: bold;
    font-family: var(--secondary-font);
    width: 100%;
    display: block;
    margin-top: 2vw;
    color: var(--secondary-color);
    text-decoration: none;
  
}

@media only screen and (max-width: 680px) {
  .work__featured a {
    font-size: 20px;
  }
}


.work__sub-header {
  border-bottom: 2px solid var(--medium);

  padding-bottom: 0.5vw;
  margin-bottom: 3vw;
  
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.work__sub-title { 
  font-family: var(--secondary-font);
  padding-top: 2vw;
  font-size: 2.4vw;
  font-weight: bold;
  width: var(--line-7);
  text-transform: uppercase;
}

.work__sub-projects a {
  font-size: 1.4vw;
  font-weight: bold;
  font-family: var(--secondary-font);
  width: 100%;
  display: block;
  margin-top: 1vw;
  color: var(--medium);
  text-decoration: none;
  
  border-bottom: 2px solid var(--medium);
  padding-bottom: 0.5vw;
}

@media only screen and (max-width: 680px) {
  .work__sub-projects a {
    font-size: 20px;
  }
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