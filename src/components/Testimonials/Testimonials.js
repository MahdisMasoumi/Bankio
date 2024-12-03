import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      header: "Best financial decision ever!",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit.",
      imgSrc: "img/user1.png",
      imgAlt: "Portrait",
      name: "Liam Lynn",
      location: "San Francisco, USA",
    },
    {
      id: 2,
      header: "The last step to becoming a complete minimalist",
      text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor.",
      imgSrc: "img/user2.png",
      imgAlt: "Portrait",
      name: "Sara Miles",
      location: "London, UK",
    },
    {
      id: 3,
      header: "Finally free from old-school banks",
      text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa.",
      imgSrc: "img/user3.png",
      imgAlt: "Portrait",
      name: "Nick Gomes",
      location: "Lisbon, Portugal",
    },
  ];

  return (
    <section className="section text-center mb-3" id="section--3">
      <div className="container-fluid">
        <div className="mb-1">
          <h2 className="section__header ">
            Join <span className="highlight">Millions</span> Simplifying.
          </h2>
          <h3 className="section__description">
            Millions of Bankio users are already making their lives simpler.
          </h3>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide slider align-items-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="testimonial">
                  <h5 className="testimonial__header">{testimonial.header}</h5>
                  <blockquote className="testimonial__text">
                    {testimonial.text}
                  </blockquote>
                  <address className="testimonial__author">
                    <img
                      src={testimonial.imgSrc}
                      alt={testimonial.imgAlt}
                      className="testimonial__photo"
                    />
                    <h6 className="testimonial__name">{testimonial.name}</h6>
                    <p className="testimonial__location">
                      {testimonial.location}
                    </p>
                  </address>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev slider__btn slider__btn--left"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-label="Previous Slide"
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
              aria-label="Next Slide"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
