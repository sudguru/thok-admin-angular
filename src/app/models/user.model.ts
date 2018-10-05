export interface User {
    id?: number;
    is_admin: number;
    is_super: number;
    is_customer: number;
    is_vendor: number;
    email: string;
    password: string;
    company_name: string;
    address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone: string;
    fax: string;
    url: string;
    logo: string;
    payment_methods: any;
    bank_info: string;
    notes: string;
    description: string;
}
