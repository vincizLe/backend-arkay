export class SessionTemplate {
	sessionName: string
	videoUrl: string

	static create(params: SessionTemplate.CreateParams): SessionTemplate {
		const sessionTemplate = new SessionTemplate()

		sessionTemplate.sessionName = params.sessionName
		sessionTemplate.videoUrl = params.videoUrl

		return sessionTemplate
	}
}

export namespace SessionTemplate {
	export type CreateParams = Pick<SessionTemplate, 'sessionName' | 'videoUrl'>
}
