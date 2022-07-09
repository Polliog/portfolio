<template>
  <Nav />
  <div class="container">
      <section class="title-1" tabindex="1">
        <div class="columns">
          <div class="column">
            <span class="welcome">Welcome on</span>
          </div>
          <div class="column column-h">
            <h1>Polliog's</h1>
          </div>
        </div>
      </section>
      <section class="title-2">
        <div class="cont is-flex column-h">
          <h1>Portfolio</h1>
        </div>
      </section>
    <About />
    <Projects />
    <Contact />
  </div>
</template>


<style scoped lang="scss">

.title-1 {
  padding-top: 15rem;
  display: flex;
  width: 100%;

  .columns {
    width: 100%;

    .column:first-of-type {
      text-align: end;
      margin-right: 1rem;
      color: #717073;
      font-size: 1.5rem;
      padding-top: 6.8rem;
      transition-duration: .3s;
    }

    .column:last-of-type {
      position: relative;
      color: #f5fa93;
      font-size: 7rem;
      transition-duration: .3s;

       > h1 {
         &::before {
           position: absolute;
           top: 0;
           left: 0;
           content: "";
           width: 100%;
           min-height: 100%;
           background-color: #090809;
           animation: typing 1s forwards .6s;
         }
       }
    }
  }
}

.title-2 {
  margin-top: -2rem;
  width: 100%;
  transition-duration: .3s;

  .cont {
    position: relative;
    margin-left: 15rem;
    color: white;
    font-size: 7rem;
    transition-duration: .3s;

    &::before {
      position: absolute;
      top: 10px;
      left: 0;
      content: "";
      width: 100%;
      min-height: 100%;
      background-color: #090809;
      animation: typing 1s forwards .65s;
    }
  }
}

@media (max-width: 769px) {
  .container {
    margin: 1rem;
  }

  .title-1 {
    .columns {
      width: 100%;

      .column:first-of-type {
        text-align: start;
        padding-bottom: 0;
      }

      .column:last-of-type {
        padding-top: 0;
        font-size: 4rem;
      }
    }
  }

  .title-2 {
    .cont {
      padding-top: 5px;
      margin-left: 0;
      font-size: 5rem;
    }
  }
}

@media (max-width: 676px) {

}

@keyframes typing {
  to {
    left: 100%;
  }
}
</style>

<script>
import Nav from "../components/Nav";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";
import Contact from "../components/Home/Contact";
export default {
  components: {Contact, Projects, About, Nav}
}
</script>
