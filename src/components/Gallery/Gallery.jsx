import React from "react";
import "./Gallery.css";

export default function Gallery()
{
    const photos = ["/images/gallery.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg" ];
    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {photos.map((p, i) => <img key={i} src={p} alt={`Фото ${i+1}`} />)}
            </div>
        </section>
    );
}