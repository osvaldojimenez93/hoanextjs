import { User } from "./models/user";

export const getBoardMembers: () => Promise<User[]> = async () => {
  return [
    {
      id: "1",
      firstName: "Cole",
      lastName: "Hudson",
      email: "President@nsah-hoa.org",
      role: "President",
    },
    {
      id: "2",
      firstName: "Davin",
      lastName: "Dukes",
      email: "VicePresident@nsah-hoa.org",
      role: "Vice President",
    },
    {
      id: "3",
      firstName: "Stephanie",
      lastName: "Olvera",
      email: "Secretary@nsah-hoa.org",
      role: "Secretary",
    },
    {
      id: "4",
      firstName: "Mike",
      lastName: "Dammann",
      email: "Treasurer@nsah-hoa.org",
      role: "Treasurer",
    },
    {
      id: "5",
      firstName: "Laura",
      lastName: "Hunt",
      email: "Architect@nsah-hoa.org",
      role: "Architect",
    },
  ];
};
