import { ObjectId } from 'mongodb'

export class ProductDocument {
	_id: ObjectId
	type: string
	name: string
	cost: number
	imageUrl: string
	videoUrl?: string
}
