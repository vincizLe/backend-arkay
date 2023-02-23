export declare class SessionTemplate {
    sessionName: string;
    videoUrl: string;
    static create(params: SessionTemplate.CreateParams): SessionTemplate;
}
export declare namespace SessionTemplate {
    type CreateParams = Pick<SessionTemplate, 'sessionName' | 'videoUrl'>;
}
