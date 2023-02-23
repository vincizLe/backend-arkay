import { Statement } from './statement.entity';
export declare class Assessment {
    id?: string;
    statements: Statement[];
    isCompleted: boolean;
    score: number;
    static create(params: Assessment.CreateParams): Assessment;
}
export declare namespace Assessment {
    type CreateParams = Partial<Pick<Assessment, 'id'>> & Pick<Assessment, 'statements' | 'isCompleted' | 'score'>;
}
