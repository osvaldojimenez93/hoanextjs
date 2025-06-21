'use client';

import NavLinks from '@/app/ui/home/nav-links';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm md:shadow-none md:h-full">
      {/* Mobile menu button */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <span className="font-semibold text-gray-800">Menu</span>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block md:h-full`}>
        <div className="flex h-full flex-col px-3 py-2 md:px-2">
          <div className="flex grow flex-col justify-between space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
