import { Provider } from '@nestjs/common'
import { Db, MongoClient } from 'mongodb'

export const databaseConnectionProvider: Provider<Db> = {
	provide: 'DATABASE_CONNECTION',
	useFactory: async (): Promise<Db> => {
		try {
			const client = await MongoClient.connect('mongodb://127.0.0.1:27017')

			return client.db('arkay')
		} catch (e) {
			throw e
		}
	}
}
