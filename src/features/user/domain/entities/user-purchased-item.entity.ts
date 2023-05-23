export class UserPurchasedItem {
	id: string
	name: string
	type: string

	constructor(entity: UserPurchasedItem) {
		Object.assign(this, entity)
	}
}
