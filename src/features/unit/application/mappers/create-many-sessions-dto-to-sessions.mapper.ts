import { Session } from '../../../unit/domain/entities/session.entity'
import { CreateManySessionsDto } from '../dto/create-many-sessions.dto'

export function createManySessionsDtoToSessionsMapper(createManySessionsDto: CreateManySessionsDto): Array<Session> {
	// return createManySessionsDto.sessions.map(session => {
	// 	return Session.create({
	// 		name: session.name,
	// 		videoUrl: session.videoUrl,
	// 		isCompleted: session.isCompleted,
	// 		unitId: session.unitId
	// 	})
	// })
	return
}
