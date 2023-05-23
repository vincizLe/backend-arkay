import { ObjectId } from 'mongodb'
import { Project } from '../../domain/entities/project.entity'
import { ProjectDocument } from '../schemas/project.schema'

export function projectToProjectDocument(project: Project): ProjectDocument {
	return {
		_id: !!project.id ? new ObjectId(project.id) : new ObjectId(),
		name: project.name,
		url: project.url,
		isPublished: project.isPublished,
		isShared: project.isShared,
		guestId: project.guestId,
		favorite: project.favorite,
		userId: project.userId,
		createdDate: project.createdDate,
		publishedDate: project.publishedDate
	}
}
