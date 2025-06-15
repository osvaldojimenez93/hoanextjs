export default function Page() {
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">HOA Documents</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">NSAH HOA Community Documents:</h2>
        <a
          href="https://drive.google.com/drive/folders/1yXwNi_VmXtBmoKjBofb7KftmJGDQebsX?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Documents Drive
        </a>
      </section>
      
      <section>
        <h2 className="text-xl font-bold mb-4">NSAH HOA Board Documents:</h2>
        <a
          href="https://drive.google.com/drive/folders/1UrXioC3CwTKg3OGYyd0MHuvVAdgt6auz?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Documents Drive
        </a>
      </section>
    </div>
  );
};