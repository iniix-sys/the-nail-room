import { useState, useEffect, useRef } from "react";
import { gallery } from "../data/gallery";

export default function Gallery() {

    const [selected, setSelected] = useState(null);
    const ref = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = ref.current.querySelectorAll(".reveal");
        elements.forEach(el => observer.observe(el));

    }, []);

    return (
        <section className="section" id="gallery" ref={ref}>

            <h2 className="section-title reveal">Gallery</h2>

            <p className="section-subtitle reveal">
                
            </p>

            <div className="gallery-grid reveal">

                {gallery.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={item.alt}
                        className="gallery-item"
                        onClick={() => setSelected(item.image)}
                    />
                ))}

            </div>

            {selected && (
                <div className="lightbox" onClick={() => setSelected(null)}>
                    <img src={selected} alt="preview" />
                </div>
            )}

        </section>
    );
}