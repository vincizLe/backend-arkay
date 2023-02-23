/// <reference types="node" />
import { Session } from 'inspector';
import { UnitEnum } from '../../../../core/enums/unit.enum';
import { Assessment } from './assessment.entity';
import { Practice } from './practice.entity';
export declare class Unit {
    id?: string;
    name: UnitEnum;
    sessions: Session[];
    assessment: Assessment;
    practices: Practice[];
    isCompleted: boolean;
    userId: string;
    static create(params: Unit.CreateParams): Unit;
}
export declare namespace Unit {
    type CreateParams = Partial<Pick<Unit, 'id'>> & Pick<Unit, 'name' | 'sessions' | 'assessment' | 'practices' | 'isCompleted' | 'userId'>;
}
