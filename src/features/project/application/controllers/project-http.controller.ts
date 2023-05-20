import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserIdDto } from '../../../../features/user/application/dto/user-id.dto'
import { ProjectIdDto } from '../dto/project-id.dto'
import { ProjectDto } from '../dto/project.dto'
import { ProjectService } from '../services/project.service'

@ApiTags('Project')
@Controller({ path: 'project' })
export class ProjectHttpController {
	constructor(private readonly projectService: ProjectService) {}

	@Post('')
	@ApiOperation({ summary: 'Guardar proyecto' })
	async saveProject(@Body() projectDto: ProjectDto): Promise<void> {
		return await this.projectService.save(projectDto)
	}

	@Get('/:projectId')
	@ApiOperation({ summary: 'Obtener proyecto' })
	@ApiOkResponse({ type: ProjectDto, description: 'Proyecto' })
	async getProjectDetail(@Param() { projectId }: ProjectIdDto): Promise<ProjectDto> {
		return await this.projectService.getDetail(projectId)
	}

	@Get('')
	@ApiOperation({ summary: 'Listar proyectos' })
	@ApiOkResponse({ type: Array<ProjectDto>, description: 'Proyecto' })
	async listProject(@Query() { userId }: UserIdDto): Promise<Array<ProjectDto>> {
		return await this.projectService.list(userId)
	}

	@Delete('/:projectId')
	@ApiOperation({ summary: 'Eliminar proyecto' })
	async deleteProject(@Param() { projectId }: ProjectIdDto): Promise<void> {
		return await this.projectService.delete(projectId)
	}
}
