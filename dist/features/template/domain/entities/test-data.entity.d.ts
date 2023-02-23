export declare class TestData {
    input: string;
    output: string;
    static create(params: TestData.CreateParams): TestData;
}
export declare namespace TestData {
    type CreateParams = Pick<TestData, 'input' | 'output'>;
}
