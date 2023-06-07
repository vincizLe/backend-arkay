import { UserPurchasedItem } from './user-purchased-item.entity';
export declare class User {
    id?: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    imageUrl?: string;
    generalScore?: number;
    coins?: number;
    goal?: string;
    hasReminder: boolean;
    reminderDate?: string;
    purchasedItems: UserPurchasedItem[];
    constructor(entity: User);
}
