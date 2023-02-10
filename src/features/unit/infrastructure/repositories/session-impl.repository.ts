import { Session } from '../../domain/entities/session.entity'
import { SessionRepository } from '../../domain/repositories/unit.repository'

export class SessionImplRepository implements SessionRepository {
	getOne(unitId: string, sessionId: string): Promise<Session> {
		throw new Error('Method not implemented.')
	}
	saveMany(sessions: Session[]): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
