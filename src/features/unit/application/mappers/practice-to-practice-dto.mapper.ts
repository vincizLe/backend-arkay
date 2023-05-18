import { Practice } from '../../domain/entities/practice.entity'
import { PracticeDto } from '../dto/practice.dto'

export function practiceToPracticeDto(practice: Practice): PracticeDto {
	return new PracticeDto({
		id: practice.id,
		score: practice?.score ?? 0,
		isCompleted: practice.isCompleted
	})
}
