import { Filter, RootFilterOperators } from 'mongodb'

import { ProjectDocument } from '../schemas/project.schema'

export function listProjectFilterQuery(userId?: string, favorite?: boolean, isShared?: boolean): Filter<ProjectDocument> {
	const query: RootFilterOperators<ProjectDocument> = {}

	if (!!userId) {
		query.userId = userId
	}

	if (!!favorite) {
		query.favorite = favorite
	}

	if (!!isShared) {
		query.isShared = isShared
	}

	return query
}
