import { Injectable } from '@nestjs/common'
import { Product } from '../../domain/entities/product.entity'
import { ListQuery } from '../../domain/queries/list.query'
import { ProductRepository } from '../../domain/repositories/product.repository'
import { ProductDto } from '../dto/product.dto'

@Injectable()
export class ProductService {
	constructor(private readonly productRepository: ProductRepository) {}

	async save(productDto: ProductDto): Promise<void> {
		const product = new Product({
			id: productDto.id ?? null,
			type: productDto.type,
			name: productDto.name,
			cost: productDto.cost,
			imageUrl: productDto.imageUrl,
			videoUrl: productDto.videoUrl ?? null
		})

		await this.productRepository.save(product)
	}

	async getDetail(productId: string): Promise<Product> {
		return await this.productRepository.getById(productId)
	}

	async list(type: string): Promise<Array<Product>> {
		return await this.productRepository.list(new ListQuery({ type }))
	}

	async delete(productId: string): Promise<void> {
		const product = await this.productRepository.getById(productId)

		if (!!product) {
			return await this.productRepository.deleteById(productId)
		}
	}
}
