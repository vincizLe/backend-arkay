export declare class Practice {
    id?: string;
    score?: number;
    isCompleted: boolean;
    static create(params: Practice.CreateParams): Practice;
}
export declare namespace Practice {
    type CreateParams = Partial<Pick<Practice, 'id' | 'score'>> & Pick<Practice, 'isCompleted'>;
}
