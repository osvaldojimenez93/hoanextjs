

export default async function Page() {


    return (
    <main>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to North San Antonio Hills
        </h2>
        <p>
          The North San Antonio Hills Homeowners Association (NSAH HOA) is dedicated to maintaining and improving the quality of life in our community. Our website is designed to provide important information about our neighborhood, including upcoming events, news, and resources for residents.
        </p>
        <br/>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Latest News
        </h2>
        <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61564446704590%26mibextid%3DLQQJ4d&tabs=timeline&width=1200&height=600&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId"
                  width="1200"
                  height="600"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
        <br/>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Community Information Collection Forms</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAABxo201URFowOVc0NzZTVUVGSThDTTRPSzhJRVhXTC4u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Feedback collection form
            </a> - Give the board feedback/ideas for improvement.
          </li>
          <li>
            <a
              href="https://forms.office.com/r/kG3HjSEWW1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Contact collection form
            </a> - Help us keep in touch with you by providing your contact information. This will allow us to send you important updates and information about our community.
          </li>
        </ul>
      </section>
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
    </main>
  );
}