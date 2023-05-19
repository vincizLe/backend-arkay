import { Product } from '../entities/product.entity'

export abstract class ProductRepository {
	abstract save(product: Product): Promise<void>
	abstract getById(productId: string): Promise<Product>
	abstract list(): Promise<Array<Product>>
	abstract deleteById(productId: string): Promise<void>
}
