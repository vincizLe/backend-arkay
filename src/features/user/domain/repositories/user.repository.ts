import { User } from '../entities/user.entity'

export abstract class UserRepository {
	abstract save(user: User): Promise<void>
	abstract getById(userId: string): Promise<User>
	abstract deleteById(userId: string): Promise<void>
}
