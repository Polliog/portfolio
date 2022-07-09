<template>
  <section class="projects">
    <div class="is-flex is-justify-content-flex-end">
      <h1 class="section-title" id="projects">Projects</h1>
    </div>
    <div class="p-card-container columns is-multiline">
      <div data-aos="fade-up" tabindex="1" class="p-card column is-half-desktop is-half-tablet is-full-mobile"
           v-for="(project, index) in projects" v-bind:style='{"background": project.image}'
           @click="openLink(project.link)" v-bind:data-aos-delay="getDelay(index)">
        <div class="p-card-content">
          <div class="rc">
            <div class="p-name">
              {{ project.name }}
            </div>
            <div class="p-description">
              {{ project.description }}
            </div>
            <div class="p-button">
              <button class="button is-primary" tabindex="-1">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {projects} from "~/models/project.model";

const name = "Projects"

function openLink(link: string) {
  window.open(link, "_blank");
}

function getDelay(index: number) {
  return (index + 1) * 100;
}

//windowWidth: typeof window !== "undefined" ? window.innerWidth : 0

</script>

<style scoped>
.projects {
  margin-top: 12rem;
}

.p-card-container {
  margin-top: 2rem;
}
</style>
