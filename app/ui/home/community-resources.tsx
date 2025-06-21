import React from 'react';

export default function CommunityResources() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Helpful Community Resources</h2>
      <ul className="list-disc pl-5">
        <li>
          <a
            href="https://www.sa.gov/Directory/Departments/Mayor-Council/City-Council/D6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            District 6 City Council
          </a>
        </li>
        <li>
          <a
            href="https://www.saws.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            SAWS Website
          </a>
        </li>
        <li>
          <a
            href="https://cpsenergy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CPS Energy Website
          </a>
        </li>
        <li>
          <a
            href="https://gis.sanantonio.gov/swmd/mycollectionday/default.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Garbage Collection Map
          </a>
        </li>
        <li>
          <a
            href="https://bexar.trueautomation.com/mapSearch/?cid=110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Bexar County Property Maps
          </a>
        </li>
        <li>
          <a
            href="https://www.sanantonio.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            City of San Antonio Website
          </a>
        </li>
      </ul>
    </section>
  );
}
