import { Product } from '../entities/product.entity'
import { ListQuery } from '../queries/list.query'

export abstract class ProductRepository {
	abstract save(product: Product): Promise<void>
	abstract getById(productId: string): Promise<Product>
	abstract list(listQuery: ListQuery): Promise<Array<Product>>
	abstract deleteById(productId: string): Promise<void>
}
