export class User {
	id?: string
	email: string
	password: string
	name: string
	lastname: string

	constructor(entity: User) {
		Object.assign(this, entity)
	}
}
