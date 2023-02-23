"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
class Template {
    constructor() {
        this.practiceTemplate = null;
        this.sessionTemplate = null;
        this.statementTemplate = null;
    }
    static create(params) {
        const template = new Template();
        template.unit = params.unit;
        if (params.practiceTemplate != null || params.practiceTemplate != undefined)
            template.practiceTemplate = params.practiceTemplate;
        if (params.sessionTemplate != null || params.sessionTemplate != undefined)
            template.sessionTemplate = params.sessionTemplate;
        if (params.statementTemplate != null || params.statementTemplate != undefined)
            template.statementTemplate = params.statementTemplate;
        return template;
    }
}
exports.Template = Template;
//# sourceMappingURL=template.entity.js.map