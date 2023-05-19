import { Module } from '@nestjs/common'
import { ProductHttpController } from './application/controllers/product.controller'
import { ProductService } from './application/services/product.service'
import { productRepositoryProvider } from './product.providers'

@Module({
	imports: [],
	providers: [ProductService, productRepositoryProvider],
	controllers: [ProductHttpController]
})
export class ProductModule {}
