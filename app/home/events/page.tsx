export default function Page() {
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <p className="mb-4">
        Join us for our upcoming events! We have a variety of activities planned for residents to enjoy and participate in. Mark your calendars and join the fun!
      </p>
      <p className="mb-6">
        If you would like an event to be added to this calendar, please email us{' '}
        <a href="mailto:assistantsecretary@nsah-hoa.org" className="text-blue-500 underline">
          Here
        </a>.
      </p>
      <div className="border border-gray-400">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&title=North%20San%20Antonio%20Hills&showCalendars=0&showTabs=0&src=OTU0NDI4ZjhhNjFiOTkxOWQwOWM5YzdhOTFmYmU4OTZjNjU5NzYxYjc3ZjhmNzJhYjhkNWMxNWJkZThhZjJhOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E&color=%230B8043"
          style={{ border: 'solid 1px #777' }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};