import { Module } from '@nestjs/common'
import { ProjectHttpController } from './application/controllers/project-http.controller'
import { ProjectService } from './application/services/project.service'
import { projectRepositoryProvider } from './project.providers'

@Module({
	imports: [],
	providers: [ProjectService, projectRepositoryProvider],
	controllers: [ProjectHttpController]
})
export class ProjectModule {}
