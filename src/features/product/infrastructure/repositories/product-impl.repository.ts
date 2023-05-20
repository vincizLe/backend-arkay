import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Collection, Db, ObjectId } from 'mongodb'
import { Product } from '../../domain/entities/product.entity'
import { ListQuery } from '../../domain/queries/list.query'
import { ProductRepository } from '../../domain/repositories/product.repository'
import { productDocumentToProduct } from '../mappers/product-document-to-product.mapper'
import { productToProductDocument } from '../mappers/product-to-product-document.mapper'
import { listFilterQuery } from '../query/list-filter.query'
import { ProductDocument } from '../schemas/product.schema'

@Injectable()
export class ProductImplRepository implements ProductRepository {
	private readonly collection: Collection<ProductDocument>

	constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {
		this.collection = db.collection('products')
	}

	async save(product: Product): Promise<void> {
		const productDocument = productToProductDocument(product)

		await this.collection.updateOne(
			{ _id: productDocument._id },
			{ $set: { ...productDocument, createdAt: new Date(), updatedAt: new Date() } },
			{ upsert: true }
		)
	}
	async getById(productId: string): Promise<Product> {
		const productDocument = await this.collection.findOne({ _id: new ObjectId(productId) })

		if (productDocument != null && productDocument != undefined) {
			return productDocumentToProduct(productDocument)
		} else {
			throw new NotFoundException(`No se ha encontrado el proyecto con el id: ${productId} `)
		}
	}
	async list(listQuery: ListQuery): Promise<Product[]> {
		const productDocumentCursor = this.collection.find(listFilterQuery(listQuery))

		const products = new Array<Product>()

		for await (const productDocument of productDocumentCursor) {
			products.push(productDocumentToProduct(productDocument))
		}

		return products
	}

	async deleteById(productId: string): Promise<void> {
		this.collection.deleteOne({ _id: new ObjectId(productId) })
	}
}
