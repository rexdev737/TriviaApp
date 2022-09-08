import { Dispatch } from "redux";
import { QuizState } from '../../types';
import { addData } from "../actions";
import { ADD_DATA, SET_RESULT, SET_LOADING, BEGIN_ACTION } from '../actions/types';
import axios from 'axios';
import { setLoadingAction } from '../actions/index';

let initialQuiz: QuizState = {
    isAuthenticated: false,
    loading: false,
    results: [
        {
            category: '',
            question: '',
            correct_answer: '',
            answer: ''
        }
    ]
}

const API_URL =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export const fetchQuestions = () => (dispatch: Dispatch<any>) => {
    dispatch(setLoading(false))

    axios
        .get(API_URL)
        .then((response) => {
            const { data } = response;
            const { results } = data;
            dispatch(addData(results));
        })
        .catch((e) => {
            console.error(e);
        });
};

export const setLoading = (flag: boolean) => (dispatch: Dispatch<any>) => {
    dispatch(setLoadingAction(flag))
}

const rootReducer = (state: QuizState = initialQuiz, action: any): QuizState => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                results: action.payload,
                loading: false
            }

        case SET_RESULT:
            let newResults = [...state.results];
            newResults[action.payload.id].answer = action.payload.answer;
            return {
                ...state,
                results: newResults
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case BEGIN_ACTION:
            return {
                ...state,
                isAuthenticated: true,
            }

        default:
            return state
    }
}

export default rootReducer