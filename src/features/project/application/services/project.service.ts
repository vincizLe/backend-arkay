import { Injectable } from '@nestjs/common'
import { Project } from '../../domain/entities/project.entity'
import { ProjectRepository } from '../../domain/repositories/project.repository'
import { ProjectDto } from '../dto/project.dto'

@Injectable()
export class ProjectService {
	constructor(private readonly projectRepository: ProjectRepository) {}

	async save(projectDto: ProjectDto): Promise<void> {
		const project = new Project({
			id: projectDto.id ?? null,
			url: projectDto.url,
			isPublished: projectDto.isPublished,
			isShared: projectDto.isShared,
			ownerId: projectDto.ownerId,
			guestId: projectDto.guestId,
			favorite: projectDto.favorite,
			userId: projectDto.userId
		})

		await this.projectRepository.save(project)
	}

	async getDetail(projectId: string): Promise<Project> {
		return await this.projectRepository.getById(projectId)
	}

	async list(userId: string): Promise<Array<Project>> {
		return await this.projectRepository.list(userId)
	}

	async delete(projectId: string): Promise<void> {
		const project = await this.projectRepository.getById(projectId)

		if (!!project) {
			return await this.projectRepository.deleteById(projectId)
		}
	}
}
