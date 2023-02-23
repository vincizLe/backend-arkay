import { Global, Module } from '@nestjs/common'
import { databaseConnectionProvider } from './database.providers'

@Global()
@Module({
	providers: [databaseConnectionProvider],
	exports: [databaseConnectionProvider]
})
export class DatabaseModule {}
