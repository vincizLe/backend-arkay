import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Collection, Db, ObjectId } from 'mongodb'
import { Project } from '../../domain/entities/project.entity'
import { ProjectRepository } from '../../domain/repositories/project.repository'
import { projectDocumentToProject } from '../mappers/project-document-to-project.mapper'
import { projectToProjectDocument } from '../mappers/project-to-project-document.mapper'
import { ProjectDocument } from '../schemas/project.schema'

@Injectable()
export class ProjectImplRepository implements ProjectRepository {
	private readonly collection: Collection<ProjectDocument>

	constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {
		this.collection = db.collection('units')
	}

	async save(project: Project): Promise<void> {
		const projectDocument = projectToProjectDocument(project)

		await this.collection.updateOne(
			{ _id: projectDocument._id },
			{ $set: { ...projectDocument, createdAt: new Date(), updatedAt: new Date() } },
			{ upsert: true }
		)
	}
	async getById(projectId: string): Promise<Project> {
		const projectDocument = await this.collection.findOne({ _id: new ObjectId(projectId) })

		if (projectDocument != null && projectDocument != undefined) {
			return projectDocumentToProject(projectDocument)
		} else {
			throw new NotFoundException(`No se ha encontrado el proyecto con el id: ${projectId} `)
		}
	}
	async list(userId: string): Promise<Project[]> {
		const projectDocumentCursor = this.collection.find({ userId })

		const projects = new Array<Project>()

		for await (const projectDocument of projectDocumentCursor) {
			projects.push(projectDocumentToProject(projectDocument))
		}

		return projects
	}

	async deleteById(projectId: string): Promise<void> {
		this.collection.deleteOne({ _id: new ObjectId(projectId) })
	}
}
