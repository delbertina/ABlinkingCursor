import { ScoreActions } from '@/data/score_action'
import { ScoreActionUnlocks } from '@/data/score_action_unlocks'
import { ScoreUnlocks } from '@/data/score_unlocks'
import { Scores } from '@/data/scores'
import { Upgrades } from '@/data/upgrades'
import type { Score } from '@/types/score'
import type { ScoreAction } from '@/types/score_action'
import type { ScoreActionUnlock } from '@/types/score_action_unlock'
import type { ScoreUnlock } from '@/types/score_unlock'
import type { Upgrade } from '@/types/upgrade'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    scores: Scores,
    unlockedScores: [1, 3] as number[],
    unlockedScoreActions: [1] as number[],
    ownedUpgrades: [] as number[]
  }),
  getters: {
    displayScores: (state) => {
      return state.scores.filter((item) => state.unlockedScores.indexOf(item.id) > -1)
    },
    displayScoreActions: (state) => {
      return ScoreActions.filter((item) => state.unlockedScoreActions.indexOf(item.id) > -1)
    },
    displayUpgrades: (state) => {
      return Upgrades.filter((item) => state.ownedUpgrades.indexOf(item.id) === -1)
    }
  },
  actions: {
    doScoreAction(id: number): boolean {
      const scoreAction = ScoreActions.find((item: ScoreAction) => item.id === id)
      if (!scoreAction) {
        return false
      }
      const scoreIndex = this.scores.findIndex((item: Score) => item.id === scoreAction?.scoreId)
      const tempScore = scoreAction.action(this.scores[scoreIndex].value)
      this.scores[scoreIndex].value = tempScore
      return true
    },
    unlockScore(id: number): boolean {
      const score = Scores.find((item: Score) => item.id === id)
      if (!score) {
        return false
      }
      this.unlockedScores.push(score.id)
      return true
    },
    unlockScoreAction(id: number): boolean {
      const scoreAction = ScoreActions.find((item: ScoreAction) => item.id === id)
      if (!scoreAction) {
        return false
      }
      this.unlockedScoreActions.push(scoreAction.id)
      return true
    },
    purchaseUpgrade(id: number): boolean {
      const upgrade = Upgrades.find((item: Upgrade) => item.id === id)
      // If no upgrade found, return "error"
      if (!upgrade) {
        return false
      }
      // TODO: check if enough money
      this.ownedUpgrades.push(upgrade.id)
      // Unlock any score actions that were unlocked
      const unlockedScoreActions = ScoreActionUnlocks.filter(
        (item: ScoreActionUnlock) => item.upgradeId === id
      )
      unlockedScoreActions.forEach((unlock) => {
        this.unlockScoreAction(unlock.scoreActionId)
      })
      // Unlock any scores that were unlocked
      const unlockedScores = ScoreUnlocks.filter((item: ScoreUnlock) => item.upgradeId === id)
      unlockedScores.forEach((unlock) => {
        this.unlockScore(unlock.scoreId)
      })
      return true
    }
  }
})
