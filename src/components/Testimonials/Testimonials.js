import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="section text-center mb-3" id="section--3">
      <div className="container-fluid">
        <div className="mb-1">
          <h2 className="section__header">Not sure yet?</h2>
          <h3 className="section__description">
            Millions of Bankists are already making their lives simpler.
          </h3>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide slider align-items-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  Best financial decision ever!
                </h5>
                <blockquote className="testimonial__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium quas quisquam non? Quas voluptate nulla minima
                  deleniti optio ullam nesciunt, numquam corporis et asperiores
                  laboriosam sunt, praesentium suscipit blanditiis.
                </blockquote>
                <address className="testimonial__author">
                  <img
                    src="img/user1.jpg"
                    alt=""
                    className="testimonial__photo"
                  />
                  <h6 className="testimonial__name">Aarav Lynn</h6>
                  <p className="testimonial__location">San Francisco, USA</p>
                </address>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  The last step to becoming a complete minimalist
                </h5>
                <blockquote className="testimonial__text">
                  Quisquam itaque deserunt ullam, quia ea repellendus provident,
                  ducimus neque ipsam modi voluptatibus doloremque, corrupti
                  laborum. Incidunt numquam perferendis veritatis neque
                  repellendus. Lorem, ipsum dolor sit amet consectetur.
                </blockquote>
                <address className="testimonial__author">
                  <img
                    src="img/user2.jpg"
                    alt=""
                    className="testimonial__photo"
                  />
                  <h6 className="testimonial__name">Miyah Miles</h6>
                  <p className="testimonial__location">London, UK</p>
                </address>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  Finally free from old-school banks
                </h5>
                <blockquote className="testimonial__text">
                  Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                  incidunt commodi architecto numquam omnis nulla autem,
                  necessitatibus blanditiis modi similique quidem. Odio aliquam
                  culpa dicta beatae quod maiores ipsa minus.
                </blockquote>
                <address className="testimonial__author">
                  <img
                    src="img/user3.jpg"
                    alt=""
                    className="testimonial__photo"
                  />
                  <h6 className="testimonial__name">Francisco Gomes</h6>
                  <p className="testimonial__location">Lisbon, Portugal</p>
                </address>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev slider__btn slider__btn--left"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next slider__btn slider__btn--right"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
