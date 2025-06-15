export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We are here to help! If you have any questions, concerns, or suggestions, please feel free to reach out to us. You can contact the North San Antonio Hills HOA directly via the contacts below OR submit an anonymous request using the form below:
      </p>
      <p className="mb-6">
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAABxo201URFowOVc0NzZTVUVGSThDTTRPSzhJRVhXTC4u"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          NSAH Feedback Form
        </a>
      </p>
      <h2 className="text-xl font-bold mb-4">HOA Board Members</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Position</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">President (E)</td>
            <td className="border border-gray-400 px-4 py-2">Jessica Grigsby</td>
            <td className="border border-gray-400 px-4 py-2">
              <a href="mailto:president@nsah-hoa.org" className="text-blue-500 underline">
                president@nsah-hoa.org
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Vice President (A)</td>
            <td className="border border-gray-400 px-4 py-2">Davin Dukes</td>
            <td className="border border-gray-400 px-4 py-2">
              <a href="mailto:vicepresident@nsah-hoa.org" className="text-blue-500 underline">
                vicepresident@nsah-hoa.org
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Secretary (E)</td>
            <td className="border border-gray-400 px-4 py-2">Cole Hudson</td>
            <td className="border border-gray-400 px-4 py-2">
              <a href="mailto:secretary@nsah-hoa.org" className="text-blue-500 underline">
                secretary@nsah-hoa.org
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Assistant Secretary (A)</td>
            <td className="border border-gray-400 px-4 py-2">Osvaldo 'Jim' Jimenez</td>
            <td className="border border-gray-400 px-4 py-2">
              <a href="mailto:assistantsecretary@nsah-hoa.org" className="text-blue-500 underline">
                assistantsecretary@nsah-hoa.org
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Treasurer (E)</td>
            <td className="border border-gray-400 px-4 py-2">Mike Dammann</td>
            <td className="border border-gray-400 px-4 py-2">
              <a href="mailto:treasurer@nsah-hoa.org" className="text-blue-500 underline">
                treasurer@nsah-hoa.org
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Architectural Chair (A)</td>
            <td className="border border-gray-400 px-4 py-2">Miguel Sanchez</td>
            <td className="border border-gray-400 px-4 py-2">
              <a href="mailto:architect@nsah-hoa.org" className="text-blue-500 underline">
                architect@nsah-hoa.org
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

