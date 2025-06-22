interface CommitteeMember {
    firstName: string;
    lastName: string;
}

export interface Committee {
    id: string; 
    name: string;
    description?: string;
    members: CommitteeMember[];
}