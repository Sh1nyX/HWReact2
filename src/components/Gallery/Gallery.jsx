import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Gallery.css";

function ImageModal({ src, onClose })
{
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt="Enlarged" />
                <button className="close-btn" onClick={onClose}>✖</button>
            </div>
        </div>,
        document.body
    );
}

export default function Gallery()
{
    const photos = ["/images/gallery.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg"];
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <>
            <section className="gallery">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {photos.map((p, i) => (
                        <img
                            key={i}
                            src={p}
                            alt={`Фото ${i + 1}`}
                            onClick={() => setSelectedPhoto(p)}
                        />
                    ))}
                </div>
            </section>

            {selectedPhoto && (
                <ImageModal src={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
            )}
        </>
    );
}