import { ObjectId } from 'mongodb'

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
	reminderDate?: Date
	purchasedItems: Array<ObjectId>
}
