<script setup lang="ts">
import { ref } from 'vue'
import LoadingButton from '@/components/LoadingButton/LoadingButton.vue'
import { useScoreStore } from '@/stores/score'
import UpgradeCard from '@/components/UpgradeCard/UpgradeCard.vue'

const score = useScoreStore()

let releaseDate = ref(9)
const cooldownAddChar = 5000

// const changeRelease = () => {
//   //Change release date to a number from 10-110.
//   releaseDate.value = Math.ceil(Math.random() * 100) + 10
// }
const addCharacters = () => {
  //Add characters to total from 2-15
  score.addChars(Math.ceil(Math.random() * 15) + 2)
}
const clickButtonType = () => {
  addCharacters()
}
const clickUpgradeCard = () => {
  console.log('upgrade card clicked')
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>Generate Resources</h1>
        <p>Days until release: {{ releaseDate }}</p>
        <hr />
        <h3>Score:</h3>
        <div>
          <div>Money: {{ score.money }}</div>
          <div>Cred: {{ score.cred }}</div>
          <hr />
          <div>Characters: {{ score.chars }}</div>
          <div v-if="score.lines >= 0">Lines: {{ score.lines }}</div>
          <div v-if="score.funcs >= 0">Functions: {{ score.funcs }}</div>
          <div v-if="score.classes >= 0">Classes: {{ score.classes }}</div>
          <div v-if="score.packs >= 0">Packages: {{ score.packs }}</div>
          <div v-if="score.prods >= 0">Products: {{ score.prods }}</div>
        </div>
        <hr />
        <LoadingButton
          :button-cooldown="cooldownAddChar"
          button-text="Type Characters"
          @on-click="clickButtonType"
        />
      </div>
      <div class="col">
        <h1>Purchase Upgrades</h1>
        <div v-if="score.chars >= 30">
          <UpgradeCard
            card-title="Enter Button"
            :card-price="100"
            card-price-unit="characters"
            card-description="We've got enough characters, maybe we need a way to better organize them?"
            @on-click="clickUpgradeCard"
          />
        </div>
      </div>
      <div class="col"><h1>Event History</h1></div>
    </div>
  </div>
</template>
