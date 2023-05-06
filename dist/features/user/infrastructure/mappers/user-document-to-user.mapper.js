"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDocumentToUser = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
function userDocumentToUser(userDocument) {
    return new user_entity_1.User({
        id: userDocument._id.toHexString(),
        email: userDocument.email,
        password: userDocument.password,
        name: userDocument.name,
        lastname: userDocument.lastname
    });
}
exports.userDocumentToUser = userDocumentToUser;
//# sourceMappingURL=user-document-to-user.mapper.js.map