export declare class User {
    id?: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    imageUrl?: string;
    generalScore?: number;
    coins?: number;
    hasReminder: boolean;
    reminderDate?: Date;
    purchasedItems: string[];
    constructor(entity: User);
}
