import { PurchasedItemDto } from 'src/features/user/application/dto/purchased-item.dto';
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
