export default function Page() {
  const committees = {
    "City Community Relations": [
      "Jessica Grigsby",
      "Davin Dukes",
      "Cole Hudson",
      "Osvaldo 'Jim' Jimenez",
    ],
    "Neighborhood Community Relations": [
      "Davin Dukes",
      "Osvaldo 'Jim' Jimenez",
      "Kevin Mantovani",
      "Alan Tuma",
    ],
    "Budget and Finance": [
      "Jessica Grigsby",
      "Mike Dammann",
      "Cole Hudson",
    ],
    "Website and Social Media": [
      "Osvaldo Jimenez",
      "Greg Jones",
    ],
    "Development and Real Estate": [
      "Jessica Grigsby",
      "Cole Hudson",
      "Richard Ramos",
      "Linda Pilar",
    ],
    "Social Events Coordinator": ["Looking for volunteers!"],
    "Park Maintenance and Clean Up": ["Looking for volunteers!"],
    "Sign Maintenance": ["Looking for volunteers!"],
    "Architectural": [
      "Miguel Sanchez",
      "Thomas",
      "Jessica Grigsby",
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">North San Antonio Hills HOA Committees</h1>
      <p className="mb-4">
        In order to better serve the community and address the needs of our residents as a team, the North San Antonio Hills HOA has established several committees led by board members or members at large. If you are interested in joining a committee, please contact the committee chairperson directly.
      </p>
      <p className="mb-6">
        If you have an idea for a new committee, please contact the HOA board{' '}
        <a
          href="mailto:president@nsah-hoa.org;vicepresident@nsah-hoa.org;secretary@nsah-hoa.org;assistantsecretary@nsah-hoa.org"
          className="text-blue-500 underline"
        >
          Here
        </a>.
      </p>

      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="list-disc pl-6 mb-6">
        {Object.keys(committees).map((committee) => (
          <li key={committee}>
            <a
              href={`#${committee.replace(/\s+/g, '-').toLowerCase()}`}
              className="text-blue-500 underline"
            >
              {committee}
            </a>
          </li>
        ))}
      </ul>

      {Object.entries(committees).map(([committee, members]) => (
        <section key={committee} id={committee.replace(/\s+/g, '-').toLowerCase()} className="mb-6">
          <h3 className="text-lg font-bold mb-2">{committee}</h3>
          <ul className="list-disc pl-6">
            {members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};