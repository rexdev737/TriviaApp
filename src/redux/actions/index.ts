import { QuizState } from '../../types';
import { SET_RESULT, ADD_DATA, SET_LOADING, BEGIN_ACTION } from './types';

export const setResult = (id: number, answer: string) => ({
    type: SET_RESULT,
    payload: {
        id,
        answer
    }
})

export const addData = (data: QuizState) => ({
    type: ADD_DATA,
    payload: data
})

export const setLoadingAction = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading
})

export const beginAction = () => ({
    type: BEGIN_ACTION
})