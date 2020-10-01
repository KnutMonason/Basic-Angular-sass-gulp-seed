<template>
  <footer class="footer">
    <div class="footer__inner">
      <h1 class="footer__title">I'm looking for new projects starting winter <span class="smaller"> 2020</span></h1>
      <p class="footer__sub-title">Want to revamp your business digital presence or 
        just introduce yourself send a <a href="mailto:knutmonason@gmail.com">mail!</a></p>
    </div>
    

  </footer>
</template>

<style>
.footer {
  margin-top: 10vw;
  min-height: 30vw;
  background-color:var(--green);
}

@media only screen and (max-width: 880px) { 
  .footer {
    margin-top: 30px;
    min-height: 300px;
  }

 }

.footer__title {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 1vw;
}

@media only screen and (max-width: 880px) { 
    .footer__title {
      font-size: 30px;
    }
  }

.footer__sub-title {
  font-size: 2vw;

  margin-bottom: 1vw;
}

@media only screen and (max-width: 880px) { 
    .footer__sub-title  {
      font-size: 20px !important;
    }
  }

.footer__sub-title a {
  color: var(--primary-color);
}

.footer__inner {
  padding-top: 4vw;
  margin-left: var(--line-2);
  width: var(--line-7);
  
}

.smaller {
  font-size: 0.7em;
  margin-left: -0.3em;
  vertical-align: top;
}
  
</style>

<script>
  
</script>