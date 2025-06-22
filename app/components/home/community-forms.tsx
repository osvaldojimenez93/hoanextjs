import React from 'react';

export default function CommunityForms() {
  return (
    <section className="mb-6 md:mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Community Information Collection Forms</h2>
      <ul className="list-disc pl-4 md:pl-5 text-sm md:text-base">
        <li className="mb-2">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAABxo201URFowOVc0NzZTVUVGSThDTTRPSzhJRVhXTC4u"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-words"
          >
            Feedback collection form
          </a> 
          <p className="mt-1">Give the board feedback/ideas for improvement.</p>
        </li>
        <li className="mb-2">
          <a
            href="https://forms.office.com/r/kG3HjSEWW1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-words"
          >
            Contact collection form
          </a>
          <p className="mt-1">Help us keep in touch with you by providing your contact information. This will allow us to send you important updates and information about our community.</p>
        </li>
      </ul>
    </section>
  );
}
