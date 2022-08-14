export type Salutation = 'Mr.' | 'Mrs.' | 'Miss' | 'Dr.' | 'Prof.';
export type Gender = 'Male' | 'Female' | 'Other' | 'Not Specified';
export type Role = 'Admin' | 'Country Manager' | 'Site Editor';
export interface User {
    salutation?: Salutation;
    first_name?: string;
    last_name?: string;
    display_name?: string;
    gender?: Gender;
    date_of_birth?: string;
    nationality?: string;
    role?: Role;
    region?: string;
    email?: string;
    phone?: string;
    image_url?: string;
    status?: boolean;
    last_login?: string;
}
