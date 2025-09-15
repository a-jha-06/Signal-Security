import React from "react";
import "./gallery.css";

const Gallery = () => {
  const images = [
    "/images/IMG-20250622-WA0026.jpg",
    "/images/IMG-20250622-WA0025.jpg",
    "/images/IMG-20250622-WA0012.jpg",
    "/images/IMG-20250622-WA0013.jpg",
    "/images/IMG-20250622-WA0014.jpg",
    "/images/IMG-20250622-WA0015.jpg",
    "/images/IMG-20250622-WA0016.jpg",
    "/images/IMG-20250622-WA0017.jpg",
    "/images/IMG-20250622-WA0018.jpg",
     "/images/IMG-20250622-WA0023.jpg",
    "/images/IMG-20250622-WA0020.jpg",
    "/images/IMG-20250622-WA0021.jpg",
    "/images/IMG-20250622-WA0022.jpg",
    "/images/IMG-20250622-WA0024.jpg",
    "/images/IMG-20250622-WA0027.jpg",
    "/images/IMG-20250622-WA0028.jpg",
    "/images/IMG-20250622-WA0029.jpg",
    "/images/IMG-20250622-WA0030.jpg",
    "/images/IMG-20250622-WA0031.jpg",
    "/images/IMG-20250622-WA0032.jpg",
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">GALLERY</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
