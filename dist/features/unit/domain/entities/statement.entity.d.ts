export declare class Statement {
    id?: string;
    question: string;
    answer: string;
    alternativeAnswers: string[];
    isCompleted: boolean;
    score?: number;
    static create(params: Statement.CreateParams): Statement;
}
export declare namespace Statement {
    type CreateParams = Partial<Pick<Statement, 'id' | 'score'>> & Pick<Statement, 'question' | 'answer' | 'alternativeAnswers' | 'isCompleted'>;
}
