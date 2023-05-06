import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Collection, Db, ObjectId } from 'mongodb'
import { User } from '../../domain/entities/user.entity'
import { UserRepository } from '../../domain/repositories/user.repository'
import { userDocumentToUser } from '../mappers/user-document-to-user.mapper'
import { userToUserDocument } from '../mappers/user-to-user-document.mapper'
import { UserDocument } from '../schemas/user.document'

@Injectable()
export class UserImplRepository implements UserRepository {
	private readonly collection: Collection<UserDocument>

	constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {
		this.collection = db.collection('users')
	}

	async save(user: User): Promise<void> {
		const userDocument = userToUserDocument(user)

		await this.collection.updateOne(
			{ _id: userDocument._id },
			{ $set: { ...userDocument, createdAt: new Date(), updatedAt: new Date() } },
			{ upsert: true }
		)
	}
	async getById(userId: string): Promise<User> {
		const userDocument = await this.collection.findOne({ _id: ObjectId.createFromHexString(userId) })

		if (userDocument != null && userDocument != undefined) {
			return userDocumentToUser(userDocument)
		} else {
			throw new NotFoundException(`No se ha encontrado el usuario con el id: ${userId} `)
		}
	}

	async getByEmailAndPassword(email: string, password: string): Promise<User> {
		const userDocument = await this.collection.findOne({ email, password })

		if (userDocument != null && userDocument != undefined) {
			return userDocumentToUser(userDocument)
		} else {
			throw new NotFoundException(`No se ha encontrado el usuario con los valores ingresados `)
		}
	}

	async deleteById(userId: string): Promise<void> {
		await this.collection.deleteOne({ _id: ObjectId.createFromHexString(userId) })
	}
}
