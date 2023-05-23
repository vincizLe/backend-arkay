import { UserPurchasedItem } from './user-purchased-item.entity'

export class User {
	id?: string
	email: string
	password: string
	name: string
	lastname: string
	imageUrl?: string = null
	generalScore?: number = 0
	coins?: number = 0
	hasReminder: boolean
	reminderDate?: string = null
	purchasedItems = new Array<UserPurchasedItem>()

	constructor(entity: User) {
		Object.assign(this, entity)
	}
}
