import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
export declare class SaveUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(user: User): Promise<void>;
}
