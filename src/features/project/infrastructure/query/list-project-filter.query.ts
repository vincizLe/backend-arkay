import { Filter, RootFilterOperators } from 'mongodb'

import { ProjectDocument } from '../schemas/project.schema'

export function listProjectFilterQuery(userId?: string, favorite?: boolean, isShared?: boolean): Filter<ProjectDocument> {
	const query: RootFilterOperators<ProjectDocument> = {}

	if (userId !== null && userId !== undefined) {
		query.userId = userId
	}

	if (favorite !== null && favorite !== undefined) {
		if (String(favorite) === 'true') {
			query.favorite = true
		} else {
			query.favorite = false
		}
	}

	if (isShared !== null && isShared !== undefined) {
		if (String(isShared) === 'true') {
			query.isShared = true
		} else {
			query.isShared = false
		}
	}

	return query
}
