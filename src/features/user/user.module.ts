import { Module } from '@nestjs/common'
import { UserHttpController } from './application/controllers/user-http.controller'
import { userRepositoryProvider, userServiceProvider } from './user.provider'

@Module({
	providers: [userServiceProvider, userRepositoryProvider],
	controllers: [UserHttpController],
	exports: [userRepositoryProvider]
})
export class UserModule {}
