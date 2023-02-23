"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
class Session {
    static create(params) {
        const session = new Session();
        if (params.id != null && params.id != undefined)
            session.id = params.id;
        session.name = params.name;
        session.videoUrl = params.videoUrl;
        session.isCompleted = params.isCompleted;
        return session;
    }
}
exports.Session = Session;
//# sourceMappingURL=session.entity.js.map