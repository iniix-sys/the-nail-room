import { useEffect, useRef } from "react";
import { services } from "../data/services";

export default function Services() {

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
        <section className="section" id="services" ref={ref}>

            <h2 className="section-title reveal">Services</h2>

            <p className="section-subtitle reveal">
                Check out some of my services!
            </p>

            <div className="services-grid">

                {services.map((item, index) => (
                    <div className="service-card reveal" key={index}>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <span className="price">{item.price}</span>

                    </div>
                ))}

            </div>

        </section>
    );
}