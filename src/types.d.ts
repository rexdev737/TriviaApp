export interface IQuiz {
    category: string,
    question: string,
    correct_answer: string,
    answer: string
}

// export interface IQuiz {
//     id: number,
//     question: string,
//     result: string
// }

export type QuizState = {
    loading: boolean,
    results: IQuiz[]
}

export type QuizAction = {
    type: string,
    payload: QuizState
}

export type DispatchType = (args: QuizAction) => QuizAction