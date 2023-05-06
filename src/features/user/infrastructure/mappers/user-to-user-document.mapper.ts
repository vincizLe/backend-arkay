import { ObjectId } from 'mongodb'
import { User } from '../../domain/entities/user.entity'
import { UserDocument } from '../schemas/user.document'

export function userToUserDocument(user: User): UserDocument {
	return {
		_id: user.id != null || user.id != undefined ? new ObjectId() : ObjectId.createFromHexString(user.id),
		email: user.email,
		password: user.password,
		name: user.name,
		lastname: user.lastname
	}
}
