export declare class Session {
    id?: string;
    name: string;
    videoUrl: string;
    isCompleted: boolean;
    score?: number;
    static create(params: Session.CreateParams): Session;
}
export declare namespace Session {
    type CreateParams = Partial<Pick<Session, 'id' | 'score'>> & Pick<Session, 'name' | 'videoUrl' | 'isCompleted'>;
}
