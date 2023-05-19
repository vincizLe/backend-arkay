import { ObjectId } from 'mongodb'

export interface ProjectDocument {
	_id: ObjectId
	url: string
	isPublished: boolean
	isShared: boolean
	ownerId: string
	guestId: string
	favorite: boolean
	userId: string
}
