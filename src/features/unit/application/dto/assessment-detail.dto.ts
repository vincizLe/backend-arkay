import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class StatementDto {
	@ApiProperty()
	id: string

	@ApiProperty()
	question: string

	@ApiProperty()
	answer: string

	@ApiProperty({ type: String, isArray: true })
	alternativeAnswers = new Array<string>()

	@ApiProperty()
	isCompleted: boolean

	@ApiPropertyOptional()
	score?: number

	constructor(entity: StatementDto) {
		Object.assign(this, entity)
	}
}

export class AssessmentDetailDto {
	@ApiProperty({ type: StatementDto, isArray: true })
	statements = new Array<StatementDto>()

	@ApiProperty()
	isCompleted: boolean

	@ApiPropertyOptional()
	score?: number

	constructor(entity: AssessmentDetailDto) {
		Object.assign(this, entity)
	}
}
