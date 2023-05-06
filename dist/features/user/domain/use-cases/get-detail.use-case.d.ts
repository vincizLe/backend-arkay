import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
export declare class GetDetailUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(userId: string): Promise<User>;
}
