import { UserPurchasedItem } from '../entities/user-purchased-item.entity'
import { UserRepository } from '../repositories/user.repository'

export class ListPurchasedItemsUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(userId: string, itemType: string): Promise<Array<UserPurchasedItem>> {
		const user = await this.userRepository.getById(userId)

		const purchasedItems = user.purchasedItems.filter(purchasedItem => purchasedItem.type === itemType)

		return purchasedItems
	}
}
