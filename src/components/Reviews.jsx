import { reviews } from "../data/reviews";

export default function Reviews() {
    return (
        <section className="section" id="reviews">

            <h2 className="section-title">Reviews</h2>

            <p className="section-subtitle">
                Here's what my customers have to say:
            </p>

            <div className="reviews-grid">

                {reviews.map((r, i) => (
                    <div className="review-card" key={i}>
                        <div className="stars">{r.rating}</div>
                        <p>{r.text}</p>
                        <span>- {r.name}</span>
                    </div>
                ))}

            </div>

        </section>
    );
}