export declare class Practice {
    id?: string;
    statement: string;
    testData: [string, string][];
    isCompleted: boolean;
    static create(params: Practice.CreateParams): Practice;
}
export declare namespace Practice {
    type CreateParams = Partial<Pick<Practice, 'id'>> & Pick<Practice, 'statement' | 'testData' | 'isCompleted'>;
}
