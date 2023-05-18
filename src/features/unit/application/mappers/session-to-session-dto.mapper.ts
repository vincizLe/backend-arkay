import { Session } from '../../domain/entities/session.entity'
import { SessionDto } from '../dto/session.dto'

export function sessionToSessionDto(session: Session): SessionDto {
	return new SessionDto({
		id: session.id,
		name: session.name,
		videoUrl: session.videoUrl,
		isCompleted: session.isCompleted,
		score: session?.score ?? 0
	})
}
