<script setup lang="ts">
import { ref } from 'vue'
import './HomeView.scss'

let releaseDate = ref(9)
let scoreMoney = ref(1000)
let scoreCharacters = ref(0)
let scoreLines = ref(0)
let scoreFunctions = ref(0)
let scoreClasses = ref(0)
let scorePackages = ref(0)
let scoreUnits = ref(0)
let scoreProducts = ref(0)
let scoreCred = ref(0)
const cooldownAddChar = 5000
let isAddCharDisabled = ref(false)
const progressButtonClass = 'loading-overlay'
let testButtonClass = ref('')

const changeRelease = () => {
  //Change release date to a number from 10-110.
  releaseDate.value = Math.ceil(Math.random() * 100) + 10
}
const addCharacters = () => {
  //Add characters to total from 2-15
  scoreCharacters.value += Math.ceil(Math.random() * 15) + 2
}
const clickButtonType = () => {
  if (isAddCharDisabled.value) {
    return
  }
  //Disable button
  isAddCharDisabled.value = true
  testButtonClass.value = progressButtonClass
  //Add characters to score
  addCharacters()
  //Timer to enable button
  setTimeout(() => {
    isAddCharDisabled.value = false
    testButtonClass.value = ''
  }, cooldownAddChar)
}
</script>

<template>
  <h1>Generate Resources</h1>
  <p>Days until release: {{ releaseDate }}</p>
  <button type="button" class="btn btn-primary" v-on:click="changeRelease">Refresh</button>
  <hr />
  <h3>Preview:</h3>
  <p>
    Money: {{ scoreMoney }}<br />
    Characters: {{ scoreCharacters }}<br />
    Lines: {{ scoreLines }}<br />
    Functions: {{ scoreFunctions }}<br />
    Classes: {{ scoreClasses }}<br />
    Packages: {{ scorePackages }}<br />
    Units: {{ scoreUnits }}<br />
    Products: {{ scoreProducts }}<br />
    Cred: {{ scoreCred }}
  </p>
  <button
    type="button"
    class="btn btn-primary"
    :class="testButtonClass"
    id="buttonTypeCharacters"
    :disabled="isAddCharDisabled"
    v-on:click="clickButtonType"
    :style="{ '--test-square-duration': 5000 + 'ms' }"
  >
    Type
  </button>
</template>
