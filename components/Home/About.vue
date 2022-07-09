<template>
  <section data-aos="fade-up" class="about home-section" tabindex="1" id="about">
      <div class="columns">
        <div class="column title">
          <h1 class="sticky">About</h1>
        </div>
        <div class="column content" v-text="aboutMe" v-html="aboutMe">

        </div>
      </div>
    </section>
</template>

<script setup>

  const aboutMe =
      "My name is Giuseppe Pollio. I am 18 years old, I live in Pozzuoli, Italia, and I'm a self-taught full-stack developer." +
      "<br><br>" +
      "the backend has been my main focus for many years, but I have the past years shifted my focus to front-end development, which I have developed a great passion for." +
      "<br><br>" +
      "I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies." +
      "<br><br>" +
      "I try to challenge myself by diving head-first into the unknown, learning the skills along the way, needed to complete the task. "
</script>

<style scoped lang="scss">
.about {
  margin-top: 16em;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 542px) {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
