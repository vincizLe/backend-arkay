import { TestData } from './test-data.entity';
export declare class PracticeTemplate {
    statement: string;
    algorithm: string;
    testData: TestData[];
    static create(params: PracticeTemplate.CreateParams): PracticeTemplate;
}
export declare namespace PracticeTemplate {
    type CreateParams = Pick<PracticeTemplate, 'statement' | 'algorithm' | 'testData'>;
}
