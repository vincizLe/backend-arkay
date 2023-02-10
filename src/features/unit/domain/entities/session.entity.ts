export class Session {
	id?: string
	name: string
	videoUrl: string
	isCompleted: boolean

	static create(params: Session.CreateParams): Session {
		const session = new Session()

		if (params.id != null && params.id != undefined) session.id = params.id

		session.name = params.name
		session.videoUrl = params.videoUrl
		session.isCompleted = params.isCompleted

		return session
	}
}

export namespace Session {
	export type CreateParams = Partial<Pick<Session, 'id'>> & Pick<Session, 'name' | 'videoUrl' | 'isCompleted'>
}
