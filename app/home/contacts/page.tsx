import BoardMembers from "@/app/components/contacts/boardmembers";

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
      <BoardMembers />
    </div>
  );
};

