import { SUBMIT_EMOTION } from './types'

export const submitEmotion = (emo) => {
  return {
    type: SUBMIT_EMOTION,
    payload: emo
  }
}
