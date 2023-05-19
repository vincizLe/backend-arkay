import { Filter, RootFilterOperators } from 'mongodb'
import { ListQuery } from '../../domain/queries/list.query'
import { ProductDocument } from '../schemas/product.schema'

export function listFilterQuery(listQuery: ListQuery): Filter<ProductDocument> {
	const query: RootFilterOperators<ProductDocument> = {}

	if (!!listQuery.type) {
		query.type = listQuery.type
	}

	return query
}
