import { Provider } from '@nestjs/common'
import { UserService } from './application/services/user.service'
import { UserRepository } from './domain/repositories/user.repository'
import { UserImplRepository } from './infrastructure/repositories/user-impl.repository'

export const userRepositoryProvider: Provider<UserRepository> = {
	provide: UserRepository,
	useClass: UserImplRepository
}

export const userServiceProvider: Provider<UserService> = {
	provide: UserService,
	inject: [UserRepository],
	useFactory: (userRepository: UserRepository) => {
		return new UserService(userRepository)
	}
}
