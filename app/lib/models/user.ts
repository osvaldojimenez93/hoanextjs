export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'President' | 'Vice President' | 'Secretary' | 'Treasurer' | 'Architect' |  'Member';
}