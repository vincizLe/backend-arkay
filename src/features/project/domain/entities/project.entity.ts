export class Project {
	id?: string
	name: string
	url: string
	isPublished: boolean
	isShared: boolean
	guestId: string
	favorite: boolean
	userId: string
	createdDate: string
	publishedDate: string

	constructor(entity: Project) {
		Object.assign(this, entity)
	}
}
