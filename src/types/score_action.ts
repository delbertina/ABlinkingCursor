export interface ScoreAction {
  id: number
  name: string
  scoreId: number
  cooldown: number
  action: Function
}
