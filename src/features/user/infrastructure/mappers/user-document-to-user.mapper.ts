import { User } from '../../domain/entities/user.entity'
import { UserDocument } from '../schemas/user.document'

export function userDocumentToUser(userDocument: UserDocument): User {
	return new User({
		id: userDocument._id.toHexString(),
		email: userDocument.email,
		password: userDocument.password,
		name: userDocument.name,
		lastname: userDocument.lastname,
		imageUrl: userDocument?.imageUrl ?? null,
		generalScore: userDocument?.generalScore ?? null,
		coins: userDocument?.coins ?? null,
		hasReminder: userDocument.hasReminder,
		reminderDate: userDocument?.reminderDate ?? null,
		purchasedItems: userDocument.purchasedItems.map(item => item.toHexString())
	})
}
