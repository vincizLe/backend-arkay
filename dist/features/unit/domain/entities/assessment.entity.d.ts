import { Statement } from './statement.entity';
export declare class Assessment {
    statements: Statement[];
    isCompleted: boolean;
    score?: number;
    static create(params: Assessment.CreateParams): Assessment;
}
export declare namespace Assessment {
    type CreateParams = Pick<Assessment, 'statements' | 'isCompleted' | 'score'>;
}
