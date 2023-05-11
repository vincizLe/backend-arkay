import { UnitEnum } from '../../../../core/enums/unit.enum';
import { Assessment } from './assessment.entity';
export declare class Unit {
    id?: string;
    name: UnitEnum;
    assessment?: Assessment;
    isCompleted: boolean;
    userId: string;
    static create(params: Unit.CreateParams): Unit;
}
export declare namespace Unit {
    type CreateParams = Partial<Pick<Unit, 'id' | 'assessment'>> & Pick<Unit, 'name' | 'isCompleted' | 'userId'>;
}
