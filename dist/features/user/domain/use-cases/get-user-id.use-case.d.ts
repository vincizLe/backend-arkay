import { UserRepository } from '../repositories/user.repository';
export declare class GetUserIdUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(email: string, password: string): Promise<string>;
}
