export interface ProductPrice {
    id?: number;
    product_id: number;
    attributes: string;
    regular: number;
    discounted: number;
    discount_valid_until: Date;
}
