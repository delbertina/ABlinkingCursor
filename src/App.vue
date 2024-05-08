<script setup lang="ts">
import { ref } from 'vue'

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
let cooldownButtonType = 5000
let buttonTypeClass = 'btn btn-primary'
let buttonTypeIsActive = ref(true)
let classButtonTypeActive = 'active'
let classButtonTypeDisabled = 'disabled'

const changeRelease = () => {
  //Change release date to a number from 10-110.
  releaseDate.value = Math.ceil(Math.random() * 100) + 10
}
const addCharacters = () => {
  //Add characters to total from 2-15
  scoreCharacters.value += Math.ceil(Math.random() * 15) + 2
}
const clickButtonType = () => {
  if (!buttonTypeIsActive.value) {
    return
  }
  //Disable button
  buttonTypeIsActive.value = false
  //Add characters to score
  addCharacters()
  //Timer to enable button
  setTimeout(() => (buttonTypeIsActive.value = true), cooldownButtonType)
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <div class="app-wrapper">
    <h1>A Blinking Cursor</h1>
    <!-- Bogus stat to cause mass hysteria -->
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
      id="buttonTypeCharacters"
      :disabled="!buttonTypeIsActive"
      v-on:click="() => clickButtonType()"
    >
      <!-- v-bind:class="[
        buttonTypeClass,
        buttonTypeIsActive ? classButtonTypeActive : classButtonTypeDisabled
      ]"
    > -->
      Type
    </button>
  </div>
</template>

<style scoped>
.app-wrapper {
  margin: 0 10vw;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
