export class Project {
	id: string
	name: string
	fileUrl: string
	diagramUrl: string
	practiceId?: string = null

	static create(params: Project.CreateParams): Project {
		const project = new Project()

		project.id = params.id
		project.name = params.name
		project.fileUrl = params.fileUrl
		project.diagramUrl = params.diagramUrl

		if (project.practiceId != null && project.practiceId != undefined) project.practiceId = params.practiceId

		return project
	}
}

export namespace Project {
	export type CreateParams = Pick<Project, 'id' | 'name' | 'fileUrl' | 'diagramUrl'> & Partial<Pick<Project, 'practiceId'>>
}
