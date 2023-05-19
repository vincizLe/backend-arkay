export class Product {
	id?: string
	type: string
	name: string
	cost: number
	imageUrl: string

	constructor(entity: Product) {
		Object.assign(this, entity)
	}
}
