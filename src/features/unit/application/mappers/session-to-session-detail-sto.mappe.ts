import { Session } from '../../../unit/domain/entities/session.entity'
import { SessionDetailDto } from '../dto/session-detail.dto'

export function sessionToSessionDetailDtoMapper(session: Session): SessionDetailDto {
	return
	// new SessionDetailDto({
	// 	id: session.id,
	// 	name: session.name,
	// 	videoUrl: session.videoUrl,
	// 	isCompleted: session.isCompleted
	// })
}
