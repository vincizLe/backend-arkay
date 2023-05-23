import { Project } from '../../domain/entities/project.entity'
import { ProjectDocument } from '../schemas/project.schema'

export function projectDocumentToProject(projectDocument: ProjectDocument): Project {
	return new Project({
		id: projectDocument._id.toHexString(),
		name: projectDocument?.name ?? null,
		url: projectDocument.url,
		isPublished: projectDocument.isPublished,
		isShared: projectDocument.isShared,
		ownerId: projectDocument.ownerId,
		guestId: projectDocument.guestId,
		favorite: projectDocument.favorite,
		userId: projectDocument.userId,
		createdDate: projectDocument?.createdDate ?? null,
		publishedDate: projectDocument?.publishedDate ?? null
	})
}
