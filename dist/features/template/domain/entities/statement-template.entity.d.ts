export declare class StatementTemplate {
    question: string;
    answer: string;
    alternativeAnswers: string[];
    static create(params: StatementTemplate.CreateParams): StatementTemplate;
}
export declare namespace StatementTemplate {
    type CreateParams = Pick<StatementTemplate, 'question' | 'answer' | 'alternativeAnswers'>;
}
