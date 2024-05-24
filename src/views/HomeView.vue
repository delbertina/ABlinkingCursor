<script setup lang="ts">
import { ref } from 'vue'
import LoadingButton from '@/components/LoadingButton/LoadingButton.vue'
import { useScoreStore } from '@/stores/score'
import UpgradeCard from '@/components/UpgradeCard/UpgradeCard.vue'
import { Scores } from '@/data/scores'

const score_store = useScoreStore()

let releaseDate = ref(9)

const clickScoreButton = (index: number) => {
  // score.addScore(index, Math.ceil(Math.random() * 15) + 2)
  score_store.doScoreAction(index)
}
const clickUpgradeCard = (index: number) => {
  score_store.purchaseUpgrade(index)
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
        <div v-for="score in score_store.displayScores" :key="score.id">
          <div>{{ score.name }}: {{ score.value }}</div>
        </div>
        <hr />
        <div v-for="action in score_store.displayScoreActions" :key="action.id">
          <LoadingButton
            :button-cooldown="action.cooldown"
            :button-text="action.name"
            @on-click="() => clickScoreButton(action.id)"
          />
        </div>
      </div>
      <div class="col">
        <h1>Purchase Upgrades</h1>
        <div v-for="upgrade in score_store.displayUpgrades" :key="upgrade.id">
          <UpgradeCard
            :card-title="upgrade.name"
            :card-price="upgrade.price"
            :card-price-unit="Scores.find((item) => item.id === upgrade.priceScoreId)?.name ?? ''"
            :card-description="upgrade.description"
            @on-click="() => clickUpgradeCard(upgrade.id)"
          />
        </div>
      </div>
      <div class="col">
        <h1>Event History</h1>
        <!-- TODO: Make this content scroll and fade away -->
        <div v-for="(tale, index) in score_store.history" :key="index">
          {{ tale }}
        </div>
      </div>
    </div>
  </div>
</template>
