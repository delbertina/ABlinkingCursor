<script setup lang="ts">
import { ref } from 'vue'
import './LoadingButton.scss'

const props = defineProps({
  buttonCooldown: { type: Number, required: true },
  buttonText: { type: String, required: true }
})
const emit = defineEmits<{ (e: 'onClick'): void }>()

const loadingClass = 'loading-overlay'
let LoadingButtonClass = ref('')
let isDisabled = ref(false)

const handleClick = () => {
  if (isDisabled.value) {
    return
  }
  isDisabled.value = true
  LoadingButtonClass.value = loadingClass
  emit('onClick')
  //Timer to enable button
  setTimeout(() => {
    isDisabled.value = false
    LoadingButtonClass.value = ''
  }, props.buttonCooldown)
}
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
    :class="LoadingButtonClass"
    :disabled="isDisabled"
    v-on:click="handleClick"
    :style="{ '--load-overlay-duration': props.buttonCooldown + 'ms' }"
  >
    {{ props.buttonText }}
  </button>
</template>
