import { Filter, RootFilterOperators } from 'mongodb'

import { ProjectDocument } from '../schemas/project.schema'

export function listProjectFilterQuery(userId?: string, favorite?: boolean, isShared?: boolean): Filter<ProjectDocument> {
	const query: RootFilterOperators<ProjectDocument> = {}

	if (userId !== null && userId !== undefined) {
		query.userId = userId
	}

	if (userId !== null && userId !== undefined) {
		query.favorite = favorite
	}

	if (userId !== null && userId !== undefined) {
		query.isShared = isShared
	}

	return query
}
