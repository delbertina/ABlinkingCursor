import type { ScoreAction } from '@/types/score_action'

export const ScoreActions: Array<ScoreAction> = [
  {
    id: 1,
    name: 'Type Characters',
    scoreId: 3,
    cooldown: 5000,
    action: (input: number) => input + 25
  },
  {
    id: 2,
    name: 'Add Lines',
    scoreId: 4,
    cooldown: 10000,
    action: (input: number) => input + 25
  },
  {
    id: 3,
    name: 'Return Functions',
    scoreId: 5,
    cooldown: 15000,
    action: (input: number) => input + 25
  },
  {
    id: 4,
    name: 'Export Classes',
    scoreId: 6,
    cooldown: 20000,
    action: (input: number) => input + 25
  },
  {
    id: 5,
    name: 'Build Packages',
    scoreId: 7,
    cooldown: 25000,
    action: (input: number) => input + 25
  },
  {
    id: 6,
    name: 'Ship Products',
    scoreId: 8,
    cooldown: 30000,
    action: (input: number) => input + 25
  }
]
