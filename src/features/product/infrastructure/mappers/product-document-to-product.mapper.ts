import { Product } from '../../domain/entities/product.entity'
import { ProductDocument } from '../schemas/product.schema'

export function productDocumentToProduct(productDocument: ProductDocument): Product {
	return new Product({
		id: productDocument._id.toHexString(),
		type: productDocument.type,
		name: productDocument.name,
		cost: productDocument.cost,
		imageUrl: productDocument.imageUrl
	})
}
