import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    chars: 0,
    lines: 0,
    funcs: 0,
    classes: 0,
    packs: 0,
    prods: 0,
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
    addFuns(add: number) {
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
    }
  }
})
