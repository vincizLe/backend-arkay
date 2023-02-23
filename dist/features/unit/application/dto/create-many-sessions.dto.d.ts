export declare class SessionDto {
    videoUrl: string;
    isCompleted: boolean;
    unitId: string;
    constructor(entity: SessionDto);
}
export declare class CreateManySessionsDto {
    sessions: Array<SessionDto>;
}
