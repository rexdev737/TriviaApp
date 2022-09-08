export interface IQuiz {
    category: string,
    question: string,
    correct_answer: string,
    answer: string
}

export type QuizState = {
    isAuthenticated: boolean,
    loading: boolean,
    results: IQuiz[]
}

export type QuizAction = {
    type: string,
    payload: QuizState
}

export type DispatchType = (args: QuizAction) => QuizAction