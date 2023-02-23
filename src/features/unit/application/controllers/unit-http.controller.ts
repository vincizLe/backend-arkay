import { Controller, Get } from '@nestjs/common'
import { Body, Param, Post } from '@nestjs/common/decorators'
import { ApiTags } from '@nestjs/swagger'
import { ApiOkResponse } from '@nestjs/swagger/dist'
import { CreateManySessionsDto } from '../dto/create-many-sessions.dto'
import { SessionDetailDto } from '../dto/session-detail.dto'
import { UnitService } from '../services/unit.service'

@ApiTags('Session')
@Controller({ path: 'unit' })
export class UnitHttpController {
	constructor(private readonly unitService: UnitService) {}

	@Get('/:unitId/session/:sessionId')
	@ApiOkResponse({ type: SessionDetailDto, description: 'Session' })
	async getSessionDetail(@Param('unitId') unitId: string, @Param('sessionId') sessionId: string): Promise<SessionDetailDto> {
		return
		//await this.unitService.getSessionDetail(unitId, sessionId)
	}

	@Post('/:unitId/session')
	async createManySessions(@Body() createManySessionsDto: CreateManySessionsDto): Promise<void> {
		return
		// await this.unitService.createManySessions(createManySessionsDto)
	}
}
