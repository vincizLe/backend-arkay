export declare class Project {
    id: string;
    name: string;
    fileUrl: string;
    diagramUrl: string;
    practiceId?: string;
    static create(params: Project.CreateParams): Project;
}
export declare namespace Project {
    type CreateParams = Pick<Project, 'id' | 'name' | 'fileUrl' | 'diagramUrl'> & Partial<Pick<Project, 'practiceId'>>;
}
