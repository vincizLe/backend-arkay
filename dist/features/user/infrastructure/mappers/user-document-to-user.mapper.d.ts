import { User } from '../../domain/entities/user.entity';
import { UserDocument } from '../schemas/user.document';
export declare function userDocumentToUser(userDocument: UserDocument): User;
