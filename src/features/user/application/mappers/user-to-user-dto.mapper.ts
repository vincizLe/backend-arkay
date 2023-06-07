import { User } from '../../domain/entities/user.entity'
import { UserDto } from '../dto/user.dto'

export function userToUserDto(user: User): UserDto {
	return new UserDto({
		id: user.id,
		email: user.email,
		password: user.password,
		name: user.name,
		lastname: user.lastname,
		imageUrl: user?.imageUrl ?? null,
		generalScore: user?.generalScore ?? null,
		coins: user?.coins ?? null,
		goal: user?.goal ?? null,
		hasReminder: user.hasReminder,
		reminderDate: user?.reminderDate ?? null,
		purchasedItems: user.purchasedItems
	})
}
