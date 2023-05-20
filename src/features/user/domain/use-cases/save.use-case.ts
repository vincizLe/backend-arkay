import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'

export class SaveUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(user: User): Promise<void> {
		if (user.id != null || user.id != undefined) {
			const currentUser = await this.userRepository.getById(user.id)

			currentUser.email = user.email
			currentUser.password = user.password
			currentUser.name = user.name
			currentUser.lastname = user.lastname

			if (user.imageUrl != null || user.imageUrl != undefined) {
				currentUser.imageUrl = user.imageUrl
			}

			if (user.generalScore != null || user.generalScore != undefined) {
				currentUser.generalScore = user.generalScore
			}

			if (user.coins != null || user.coins != undefined) {
				currentUser.coins = user.coins
			}

			currentUser.hasReminder = user.hasReminder

			if (user.hasReminder == true) {
				currentUser.reminderDate = user.reminderDate
			}

			currentUser.purchasedItems = user.purchasedItems

			user = currentUser
		}

		await this.userRepository.save(user)
	}
}
