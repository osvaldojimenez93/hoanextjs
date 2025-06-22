import { User } from "@/app/lib/models/user";
import { Committee } from "@/app/lib/models/committee";

export const committees: Committee[] = [
    {
        id: "1",
        name: "City Community Relations",
        members: []
    },
    {
        id: "2",
        name: "Neighborhood Community Relations",
        members: []
    },
    {
        id: "3",
        name: "Budget and Finance",
        members: []
    },
    {
        id: "4",
        name: "Website and Social Media",
        members: []
    },
    {
        id: "5",
        name: "Development and Real Estate",
        members: []
    },
    {
        id: "6",
        name: "Social Events Coordinator",
        members: []
    },
    {
        id: "7",
        name: "Park Maintenance and Clean Up",
        members: []
    },
    {
        id: "8",
        name: "Sign Maintenance",
        members: []
    },
    {        
        id: "9",
        name: "Architectural",
        members: []
    }
]

export const boardMembers : User[] = [
    {
        id: "1",
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        role: "President"
    },
    {
        id: "2",
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        role: "Vice President"
    },
    {
        id: "3",
        firstName: "Charlie",
        lastName: "Brown",
        email: "charlie@example.com",
        role: "Secretary"
    },
    {
        id: "4",
        firstName: "David",
        lastName: "Williams",
        email: "david@example.com",
        role: "Treasurer"
    },
    {
        id: "5",
        firstName: "Eve",
        lastName: "Davis",
        email: "eve@example.com",
        role: "Architect"
    },
    {
        id: "6",
        firstName: "Frank",
        lastName: "Miller",
        email: "frank@example.com",
        role: "Member"
    }
]