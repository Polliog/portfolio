<template>
  <nav class="navbar pbar">
    <div class="navbar-brand">
      <a class="navbar-item" @click="scrollToTop">

      </a>
    </div>
    <div class="p-navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a tabindex="1" href="#about">About</a>
        </div>
        <div class="navbar-item">
          <a tabindex="1" href="#projects">Projects</a>
        </div>
        <div class="navbar-item">
          <a tabindex="1" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

function scrollToTop() {
  window.scrollTo(0, 0);
}

</script>

<style scoped lang="scss">
 .pbar {
   display: flex;
   align-items: stretch;
   position: fixed;
   width: 100%;
   padding: .5rem 2rem;
   opacity: 0;
   background: rgba(9, 8, 9, 0.8);
   animation: linear 1.5s forwards welcome;
   animation-delay: .7s;

   @media (max-width: 769px) {
     top: 0;
   }
 }

 .navbar-item {
   > a {
     color: white;
     transition-duration: .3s;
   }

   > a:hover {
     color: #f5fa93;
   }
 }

 @keyframes welcome {
   0% {
     opacity: 0;
   }
   100% {
     opacity: 1;
   }
 }
</style>
