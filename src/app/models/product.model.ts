export interface Product {
    id?: number;
    category_id: number;
    name: string;
    SKU: string;
    description: string;
    user_id: number;
    available: number;
    qty_per_unit: number;
    unit: string;
    min_order_level: number;
    max_order_level: number;
    orank: number;
    vrank: number;
}
