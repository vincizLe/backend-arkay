import { Db } from 'mongodb';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
export declare class UserImplRepository implements UserRepository {
    private readonly db;
    private readonly collection;
    constructor(db: Db);
    save(user: User): Promise<void>;
    getById(userId: string): Promise<User>;
    deleteById(userId: string): Promise<void>;
}
