import { ObjectId } from 'mongodb'

export interface SessionDocument {
	_id: ObjectId
	name: string
	videoUrl: string
	isCompleted: boolean
	score?: number
}
