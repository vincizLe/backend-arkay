import { Session } from '../../domain/entities/session.entity'
import { SessionDto } from '../dto/session.dto'

export function sessionDtoToSession(sessionDto: SessionDto): Session {
	return Session.create({
		id: sessionDto.id,
		name: sessionDto.name,
		videoUrl: sessionDto.videoUrl,
		isCompleted: sessionDto.isCompleted,
		score: sessionDto?.score ?? 0
	})
}
