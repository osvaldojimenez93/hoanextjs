import React from 'react';

export default function CommunityResources() {
  return (
    <section className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Helpful Community Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        <ResourceLink 
          href="https://www.sa.gov/Directory/Departments/Mayor-Council/City-Council/D6"
          label="District 6 City Council" 
        />
        <ResourceLink 
          href="https://www.saws.org/"
          label="SAWS Website" 
        />
        <ResourceLink 
          href="https://cpsenergy.com/"
          label="CPS Energy Website" 
        />
        <ResourceLink 
          href="https://gis.sanantonio.gov/swmd/mycollectionday/default.html"
          label="Garbage Collection Map" 
        />
        <ResourceLink 
          href="https://bexar.trueautomation.com/mapSearch/?cid=110"
          label="Bexar County Property Maps" 
        />
        <ResourceLink 
          href="https://www.sanantonio.gov/"
          label="City of San Antonio Website" 
        />
      </div>
    </section>
  );
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 bg-gray-50 rounded-md text-blue-500 hover:bg-gray-100 text-sm md:text-base transition"
    >
      {label}
    </a>
  );
}
