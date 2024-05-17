<script setup lang="ts">
import './UpgradeCard.scss'

const props = defineProps({
  cardTitle: { type: String, required: true },
  cardPrice: { type: Number, required: true },
  cardPriceUnit: { type: String, required: true }, // update later to use enum
  cardDescription: { type: String, required: true }
})
const emit = defineEmits<{ (e: 'onClick'): void }>()

const handleClick = () => {
  emit('onClick')
}
</script>

<template>
  <div class="card text-white bg-secondary mb-3" v-on:click="handleClick">
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ props.cardTitle }}</strong>
      </h5>
      <h6 class="card-subtitle mb-2 text-warning">
        Cost: {{ props.cardPrice }} {{ props.cardPriceUnit }}
      </h6>
      <a href="#" class="stretched-link"></a>
      <p class="card-text">
        {{ props.cardDescription }}
      </p>
    </div>
  </div>
</template>
