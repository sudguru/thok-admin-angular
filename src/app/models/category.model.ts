export interface Category {
    id?: number;
    category: string;
    description: string;
    banner: string;
    parent_id: number;
    children?: any;
}
