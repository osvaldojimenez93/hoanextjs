"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CalendarIcon,
  NewspaperIcon,
  PhoneIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "News", href: "/home/news", icon: NewspaperIcon },
  { name: "Events", href: "/home/events", icon: CalendarIcon },
  { name: "Contacts", href: "/home/contacts", icon: PhoneIcon },
  { name: "Documents", href: "/home/documents", icon: DocumentDuplicateIcon },
  { name: "Committees", href: "/home/committees", icon: UserGroupIcon },
  { name: "HOA Dues", href: "/home/hoadues", icon: CurrencyDollarIcon },
];

interface NavLinksProps {
  closeMobileMenu?: () => void;
}

export default function NavLinks({ closeMobileMenu }: NavLinksProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    // Only close the menu on mobile devices
    if (window.innerWidth < 768 && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            className={clsx(
              "flex h-[48px] items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="h-5 w-5 flex-shrink-0" />
            <p className="truncate">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
