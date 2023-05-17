export class Session {
	id?: string
	name: string
	videoUrl: string
	isCompleted: boolean
	score?: number = 0

	static create(params: Session.CreateParams): Session {
		const session = new Session()

		if (params.id != null && params.id != undefined) session.id = params.id

		session.name = params.name
		session.videoUrl = params.videoUrl
		session.isCompleted = params.isCompleted

		if (params.score != null && params.score != undefined) session.score = params.score

		return session
	}
}

export namespace Session {
	export type CreateParams = Partial<Pick<Session, 'id' | 'score'>> & Pick<Session, 'name' | 'videoUrl' | 'isCompleted'>
}
