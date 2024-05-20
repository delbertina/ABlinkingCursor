import type { Upgrade } from '@/types/upgrade'

export const Upgrades: Array<Upgrade> = [
  {
    id: 1,
    name: 'Enter Button',
    price: 100,
    priceScoreId: 3,
    description: "We've got enough characters, maybe we need a way to better organize them?"
  },
  {
    id: 2,
    name: 'Curly Brackets',
    price: 100,
    priceScoreId: 4,
    description: "We've got enough lines, maybe we can do something with a bunch of them?"
  },
  {
    id: 3,
    name: 'An Object',
    price: 100,
    priceScoreId: 5,
    description: "We've got enough functions, they need something to interact with and be about!"
  },
  {
    id: 4,
    name: 'Namespace',
    price: 100,
    priceScoreId: 6,
    description: "We've got enough classes, these could be useful for something greater!"
  },
  {
    id: 5,
    name: 'Build Script',
    price: 100,
    priceScoreId: 7,
    description: "We've got enough packages, maybe we can make something useful for a user!"
  }
]
