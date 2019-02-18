import { _saveQuestionAnswer } from '../_DATA.js'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const CAST_VOTE = 'CAST_VOTE'

export function setQuestions(questions){
  return{
    type: SET_QUESTIONS,
    questions: questions,
  }
}

export function createQuestion(question){
  return {
    type: CREATE_QUESTION,
    question: question
  }
}

export function castVote(question) {
  return {
    type: CAST_VOTE,
    question: question
  }
}

export function handleQuestionAnswer(question) {
  return (dispatch) => {
    return _saveQuestionAnswer(question)
          .then(() => {
            dispatch(castVote(question))
          })
          .catch((e) => {
            alert(e)
          })
  }
}
