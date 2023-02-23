export declare class Session {
    id?: string;
    name: string;
    videoUrl: string;
    isCompleted: boolean;
    static create(params: Session.CreateParams): Session;
}
export declare namespace Session {
    type CreateParams = Partial<Pick<Session, 'id'>> & Pick<Session, 'name' | 'videoUrl' | 'isCompleted'>;
}
