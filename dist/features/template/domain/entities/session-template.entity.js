"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionTemplate = void 0;
class SessionTemplate {
    static create(params) {
        const sessionTemplate = new SessionTemplate();
        sessionTemplate.sessionName = params.sessionName;
        sessionTemplate.videoUrl = params.videoUrl;
        return sessionTemplate;
    }
}
exports.SessionTemplate = SessionTemplate;
//# sourceMappingURL=session-template.entity.js.map