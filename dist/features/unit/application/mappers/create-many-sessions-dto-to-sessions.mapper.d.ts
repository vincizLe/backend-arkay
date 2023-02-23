import { Session } from '../../../unit/domain/entities/session.entity';
import { CreateManySessionsDto } from '../dto/create-many-sessions.dto';
export declare function createManySessionsDtoToSessionsMapper(createManySessionsDto: CreateManySessionsDto): Array<Session>;
