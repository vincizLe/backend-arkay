import { Provider } from '@nestjs/common'
import { ProductRepository } from './domain/repositories/product.repository'
import { ProductImplRepository } from './infrastructure/repositories/product-impl.repository'

export const productRepositoryProvider: Provider<ProductRepository> = {
	provide: ProductRepository,
	useClass: ProductImplRepository
}
