"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserImplRepository = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const user_document_to_user_mapper_1 = require("../mappers/user-document-to-user.mapper");
const user_to_user_document_mapper_1 = require("../mappers/user-to-user-document.mapper");
let UserImplRepository = class UserImplRepository {
    constructor(db) {
        this.db = db;
        this.collection = db.collection('users');
    }
    async save(user) {
        const userDocument = (0, user_to_user_document_mapper_1.userToUserDocument)(user);
        await this.collection.updateOne({ _id: userDocument._id }, { $set: { ...userDocument, createdAt: new Date(), updatedAt: new Date() } }, { upsert: true });
    }
    async getById(userId) {
        const userDocument = await this.collection.findOne({ _id: mongodb_1.ObjectId.createFromHexString(userId) });
        if (userDocument != null && userDocument != undefined) {
            return (0, user_document_to_user_mapper_1.userDocumentToUser)(userDocument);
        }
        else {
            throw new common_1.NotFoundException(`No se ha encontrado el usuario con el id: ${userId} `);
        }
    }
    async deleteById(userId) {
        await this.collection.deleteOne({ _id: mongodb_1.ObjectId.createFromHexString(userId) });
    }
};
UserImplRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_CONNECTION')),
    __metadata("design:paramtypes", [mongodb_1.Db])
], UserImplRepository);
exports.UserImplRepository = UserImplRepository;
//# sourceMappingURL=user-impl.repository.js.map