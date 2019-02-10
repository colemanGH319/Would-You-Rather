import { _saveQuestion } from '../_DATA.js'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export function setQuestions(questions){
  return{
    type: SET_QUESTIONS,
    questions: questions,
  }
}

function createQuestion(question){
  return {
    type: CREATE_QUESTION,
    question: question
  }
}

export function handleNewQuestion(question) {
  return (dispatch) => {

    return _saveQuestion(question)
        .then((question) => {
          return dispatch(createQuestion(question))
        })
        .catch((e) => {
          alert(e)
        })
  }
}
