import { User } from './user';
import { Feedback } from './feedback';

export interface Answer {
    id: number;
    content: string;
    approved: boolean;
    studentDetails: User;
    created: Date;
    update: Date;
    replies: Feedback[];
    createdSince: string;
    files: string;
    filesArray: any;
    feedbackQuantity: number;
}