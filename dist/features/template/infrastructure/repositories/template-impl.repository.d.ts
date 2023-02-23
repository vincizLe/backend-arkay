import { Db } from 'mongodb';
import { UnitEnum } from 'src/core/enums/unit.enum';
import { Template } from '../../domain/entities/template.entity';
import { TemplateRepository } from '../../domain/repositories/template.repository';
export declare class TemplateImplRepository implements TemplateRepository {
    private readonly db;
    private readonly collection;
    constructor(db: Db);
    save(template: Template): Promise<void>;
    getOne(unit: UnitEnum): Promise<Template>;
}
