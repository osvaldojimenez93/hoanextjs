import React from 'react';

export default function LatestNews() {
  return (
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
  );
}
