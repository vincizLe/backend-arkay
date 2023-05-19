import { ObjectId } from 'mongodb'
import { Product } from '../../domain/entities/product.entity'
import { ProductDocument } from '../schemas/product.schema'

export function productToProductDocument(product: Product): ProductDocument {
	return {
		_id: !!product.id ? new ObjectId(product.id) : new ObjectId(),
		type: product.type,
		name: product.name,
		cost: product.cost,
		imageUrl: product.imageUrl
	}
}
