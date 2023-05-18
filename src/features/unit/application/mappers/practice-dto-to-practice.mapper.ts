import { Practice } from '../../domain/entities/practice.entity'
import { PracticeDto } from '../dto/practice.dto'

export function practiceDtoToPractice(practiceDto: PracticeDto): Practice {
	return Practice.create({
		id: practiceDto.id,
		score: practiceDto?.score ?? 0,
		isCompleted: practiceDto.isCompleted
	})
}
