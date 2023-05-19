import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ListProductDto } from '../dto/list-product.dto'
import { ProductIdDto } from '../dto/product-id.dto'
import { ProductDto } from '../dto/product.dto'
import { ProductService } from '../services/product.service'

@ApiTags('Product')
@Controller({ path: 'product' })
export class ProductHttpController {
	constructor(private readonly productService: ProductService) {}

	@Post('')
	@ApiOperation({ summary: 'Guardar producto' })
	async saveproduct(@Body() productDto: ProductDto): Promise<void> {
		return await this.productService.save(productDto)
	}

	@Get('/:productId')
	@ApiOperation({ summary: 'Obtener producto' })
	@ApiOkResponse({ type: ProductDto, description: 'Producto' })
	async getproductDetail(@Param() { productId }: ProductIdDto): Promise<ProductDto> {
		return await this.productService.getDetail(productId)
	}

	@Get('')
	@ApiOperation({ summary: 'Listar productos' })
	@ApiOkResponse({ type: Array<ProductDto>, description: 'Producto' })
	async listproduct(@Query() { type }: ListProductDto): Promise<Array<ProductDto>> {
		return await this.productService.list(type)
	}

	@Delete('/:productId')
	@ApiOperation({ summary: 'Eliminar producto' })
	async deleteproduct(@Param() { productId }: ProductIdDto): Promise<void> {
		return await this.productService.delete(productId)
	}
}
