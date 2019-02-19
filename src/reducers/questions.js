import { SET_QUESTIONS, CREATE_QUESTION, CAST_VOTE } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case SET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case CREATE_QUESTION :
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }
    case CAST_VOTE :
      return {
        ...state,
        [action.question.qid]: {
          ...state[action.question.qid],
          [action.question.answer]: {
            ...state[action.question.qid][action.question.answer],
            votes: state[action.question.qid][action.question.answer].votes
                    .concat(action.question.authedUser)
          }
        }
      }
    default :
      return state
  }
}
