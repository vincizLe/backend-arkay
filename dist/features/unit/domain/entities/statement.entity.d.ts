export declare class Statement {
    id: string;
    question: string;
    answer: string;
    alternativeAnswers: [string, string][];
    isCompleted: boolean;
    score: number;
    static create(params: Statement.CreateParams): Statement;
}
export declare namespace Statement {
    type CreateParams = Pick<Statement, 'id' | 'question' | 'answer' | 'alternativeAnswers' | 'isCompleted' | 'score'>;
}
