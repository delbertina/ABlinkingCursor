import type { Upgrade } from '@/types/upgrade'

export const Upgrades: Array<Upgrade> = [
  {
    id: 1,
    name: 'Enter Button',
    price: 100,
    priceScoreId: 3,
    description: "We've got enough characters, maybe we need a way to better organize them?",
    historyEntry: 'Enter button unlocked! Wow, now we can organize our characters into lines!'
  },
  {
    id: 2,
    name: 'Curly Brackets',
    price: 100,
    priceScoreId: 4,
    description: "We've got enough lines, maybe we can do something with a bunch of them?",
    historyEntry: 'Curly brackets unlocked! Now our lines can be organized into functions!'
  },
  {
    id: 3,
    name: 'An Object',
    price: 100,
    priceScoreId: 5,
    description: "We've got enough functions, they need something to interact with and be about!",
    historyEntry: 'We unlocked an object, I wonder what they will think up next!'
  },
  {
    id: 4,
    name: 'Namespace',
    price: 100,
    priceScoreId: 6,
    description: "We've got enough classes, these could be useful for something greater!",
    historyEntry: 'Namespace unlocked! This will be helpful for making bigger and better things!'
  },
  {
    id: 5,
    name: 'Build Script',
    price: 100,
    priceScoreId: 7,
    description: "We've got enough packages, maybe we can make something useful for a user!",
    historyEntry: 'Wow, now we can finally build products that people can use!'
  }
]
