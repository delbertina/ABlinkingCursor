import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    chars: 0,
    lines: -1,
    funcs: -1,
    classes: -1,
    packs: -1,
    prods: -1,
    money: 1000,
    cred: 0
  }),
  actions: {
    addChars(add: number) {
      this.chars += add
    },
    addLines(add: number) {
      this.lines += add
    },
    addFuncs(add: number) {
      this.funcs += add
    },
    addClasses(add: number) {
      this.classes += add
    },
    addPacks(add: number) {
      this.packs += add
    },
    addProds(add: number) {
      this.prods += add
    },
    addMoney(add: number) {
      this.money += add
    },
    addCred(add: number) {
      this.cred += add
    },
    unlockLines() {
      this.lines = 0
    },
    unlockFuncs() {
      this.funcs = 0
    },
    unlockClasses() {
      this.classes = 0
    },
    unlockPacks() {
      this.packs = 0
    },
    unlockProds() {
      this.prods = 0
    }
  }
})
