import { ObjectId } from 'mongodb'

export interface ProjectDocument {
	_id: ObjectId
	name: string
	url: string
	isPublished: boolean
	isShared: boolean
	guestId: string
	favorite: boolean
	userId: string
	createdDate: string
	publishedDate: string
}
