import { UnitEnum } from '../../../../core/enums/unit.enum';
import { Assessment } from './assessment.entity';
import { Practice } from './practice.entity';
import { Session } from './session.entity';
export declare class Unit {
    id?: string;
    name: UnitEnum;
    session?: Session;
    assessment?: Assessment;
    practice?: Practice;
    isCompleted: boolean;
    userId: string;
    static create(params: Unit.CreateParams): Unit;
}
export declare namespace Unit {
    type CreateParams = Partial<Pick<Unit, 'id' | 'session' | 'assessment' | 'practice'>> & Pick<Unit, 'name' | 'isCompleted' | 'userId'>;
}
