<script setup lang="ts">
import { ref } from 'vue'
import LoadingButton from '@/components/LoadingButton/LoadingButton.vue'
import { useScoreStore } from '@/stores/score'

const score = useScoreStore()

let releaseDate = ref(9)
const cooldownAddChar = 5000

const changeRelease = () => {
  //Change release date to a number from 10-110.
  releaseDate.value = Math.ceil(Math.random() * 100) + 10
}
const addCharacters = () => {
  //Add characters to total from 2-15
  score.addChars(Math.ceil(Math.random() * 15) + 2)
}
const clickButtonType = () => {
  addCharacters()
}
</script>

<template>
  <h1>Generate Resources</h1>
  <p>Days until release: {{ releaseDate }}</p>
  <button type="button" class="btn btn-primary" v-on:click="changeRelease">Refresh</button>
  <hr />
  <h3>Preview:</h3>
  <div>
    <div>Money: {{ score.money }}</div>
    <div>Characters: {{ score.chars }}</div>
    <div v-if="score.lines >= 0">Lines: {{ score.lines }}</div>
    <div v-if="score.funcs >= 0">Functions: {{ score.funcs }}</div>
    <div v-if="score.classes >= 0">Classes: {{ score.classes }}</div>
    <div v-if="score.packs >= 0">Packages: {{ score.packs }}</div>
    <div v-if="score.prods >= 0">Products: {{ score.prods }}</div>
    <div>Cred: {{ score.cred }}</div>
  </div>
  <LoadingButton
    :button-cooldown="cooldownAddChar"
    button-text="Type"
    @on-click="clickButtonType"
  />
</template>
