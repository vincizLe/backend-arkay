import { UserRepository } from '../repositories/user.repository';
export declare class DeleteUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(userId: string): Promise<void>;
}
