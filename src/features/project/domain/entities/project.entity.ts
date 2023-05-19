export class Project {
	id?: string
	url: string
	isPublished: boolean
	isShared: boolean
	ownerId: string
	guestId: string
	favorite: boolean
	userId: string

	constructor(entity: Project) {
		Object.assign(this, entity)
	}
}
