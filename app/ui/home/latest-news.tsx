import React from 'react';

export default function LatestNews() {
  return (
    <section className="mb-6 md:mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
        Latest News
      </h2>
      <div className="w-full overflow-hidden">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61564446704590%26mibextid%3DLQQJ4d&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
          width="100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
      <br/>
    </section>
  );
}
