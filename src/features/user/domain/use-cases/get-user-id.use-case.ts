import { UserRepository } from '../repositories/user.repository'

export class GetUserIdUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(email: string, password: string): Promise<string> {
		const user = await this.userRepository.getByEmailAndPassword(email, password)

		return user.id
	}
}
