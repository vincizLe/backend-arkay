import { Provider } from '@nestjs/common'
import { ProjectRepository } from './domain/repositories/project.repository'
import { ProjectImplRepository } from './infrastructure/repositories/project-impl.repository'

export const projectRepositoryProvider: Provider<ProjectRepository> = {
	provide: ProjectRepository,
	useClass: ProjectImplRepository
}
