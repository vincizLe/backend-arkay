import { ObjectId } from 'mongodb'

export interface UserPurchasedItemDocument {
	_id: ObjectId
	name: string
	type: string
}
