import { Filter, RootFilterOperators } from 'mongodb'

import { ProjectDocument } from '../schemas/project.schema'

export function listProjectFilterQuery(userId: string, favorite?: boolean): Filter<ProjectDocument> {
	const query: RootFilterOperators<ProjectDocument> = {
		userId
	}

	if (!!favorite) {
		query.favorite = favorite
	}

	return query
}
