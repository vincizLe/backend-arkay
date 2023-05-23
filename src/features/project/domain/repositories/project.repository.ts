import { Project } from '../entities/project.entity'

export abstract class ProjectRepository {
	abstract save(Project: Project): Promise<void>
	abstract getById(projectId: string): Promise<Project>
	abstract list(userId: string, favorite: boolean): Promise<Array<Project>>
	abstract deleteById(projectId: string): Promise<void>
}
