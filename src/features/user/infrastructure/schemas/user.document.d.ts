import { ObjectId } from 'mongodb'
import { UserPurchasedItemDocument } from './user-purchased-item.document'

export interface UserDocument {
	_id: ObjectId
	email: string
	password: string
	name: string
	lastname: string
	imageUrl?: string
	generalScore?: number
	coins?: number
	hasReminder: boolean
	reminderDate?: string
	purchasedItems: Array<UserPurchasedItemDocument>
}
