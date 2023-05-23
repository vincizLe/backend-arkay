import { PurchasedItemDto } from './purchased-item.dto';
export declare class CreateDto {
    email: string;
    password: string;
    name: string;
    lastname: string;
    imageUrl?: string;
    generalScore?: number;
    coins?: number;
    hasReminder?: boolean;
    reminderDate?: string;
    purchasedItems: PurchasedItemDto[];
}
