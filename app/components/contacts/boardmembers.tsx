import { getBoardMembers } from "@/app/lib/board-members";


export default async function BoardMembers() {
    const boardMembers = await getBoardMembers();

    if (!boardMembers) {
        return <p>Loading...</p>;
    }

    const president = boardMembers.find(member => member.role === "President");
    const vicePresident = boardMembers.find(member => member.role === "Vice President");
    const secretary = boardMembers.find(member => member.role === "Secretary");
    const treasurer = boardMembers.find(member => member.role === "Treasurer");
    const architecturalChair = boardMembers.find(member => member.role === "Architect");

    return (
        <div>
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
                        <td className="border border-gray-400 px-4 py-2">President</td>
                        <td className="border border-gray-400 px-4 py-2">{president?.firstName} {president?.lastName}</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <a href={`mailto:${president?.email}`} className="text-blue-500 underline">
                                {president?.email}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">Vice President</td>
                        <td className="border border-gray-400 px-4 py-2">{vicePresident?.firstName} {vicePresident?.lastName}</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <a href={`mailto:${vicePresident?.email}`} className="text-blue-500 underline">
                                {vicePresident?.email}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">Secretary</td>
                        <td className="border border-gray-400 px-4 py-2">{secretary?.firstName} {secretary?.lastName}</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <a href={`mailto:${secretary?.email}`} className="text-blue-500 underline">
                                {secretary?.email}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">Treasurer</td>
                        <td className="border border-gray-400 px-4 py-2">{treasurer?.firstName} {treasurer?.lastName}</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <a href={`mailto:${treasurer?.email}`} className="text-blue-500 underline">
                                {treasurer?.email}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">Architectural Chair</td>
                        <td className="border border-gray-400 px-4 py-2">{architecturalChair?.firstName} {architecturalChair?.lastName}</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <a href={`mailto:${architecturalChair?.email}`} className="text-blue-500 underline">
                                {architecturalChair?.email}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}