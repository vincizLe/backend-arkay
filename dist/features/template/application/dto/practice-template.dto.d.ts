import { UnitDto } from './unit.dto';
export declare class TestDataDto {
    input: string;
    output: string;
    constructor(entity: TestDataDto);
}
export declare class PracticeTemplateDto extends UnitDto {
    statement: string;
    algorithm: string;
    testData: TestDataDto[];
    constructor(entity: PracticeTemplateDto);
}
