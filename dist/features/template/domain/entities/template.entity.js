"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
class Template {
    constructor() {
        this.practiceTemplate = null;
        this.sessionTemplate = null;
        this.statementsTemplate = new Array();
    }
    static create(params) {
        const template = new Template();
        template.unit = params.unit;
        if (params.practiceTemplate != null || params.practiceTemplate != undefined)
            template.practiceTemplate = params.practiceTemplate;
        if (params.sessionTemplate != null || params.sessionTemplate != undefined)
            template.sessionTemplate = params.sessionTemplate;
        template.statementsTemplate = params.statementsTemplate;
        return template;
    }
}
exports.Template = Template;
//# sourceMappingURL=template.entity.js.map