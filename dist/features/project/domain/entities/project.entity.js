"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor() {
        this.practiceId = null;
    }
    static create(params) {
        const project = new Project();
        project.id = params.id;
        project.name = params.name;
        project.fileUrl = params.fileUrl;
        project.diagramUrl = params.diagramUrl;
        if (project.practiceId != null && project.practiceId != undefined)
            project.practiceId = params.practiceId;
        return project;
    }
}
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map