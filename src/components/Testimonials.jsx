import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "As always it's a wee adventure to discover what is in the food parcel and I'm always so happy and grateful for the thought and care of each and every one of you and the friendly caring drivers at Tocuh of Love. Love to you all",
    name: 'Mel'
  },
  {
    id: 2,
    text: "I don't know how to thank you for all the support you have given to us, we are forever grateful. Thank you so much for all the weekly foodstuffs and clothers for our daughter, they are all lovely and she will wear them for a long time. May God continue to bless you for us. We love you.",
    name: 'Paula'
  },
  {
    id: 3,
    text: "Well done to all involved with a Touch of Love, the work you do is extremely important and makes a difference in the lives of those who need you the most. Merry Christmas to you all.",
    name: 'Paul'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-two">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Our testimonials</span>
          <h2 className="section-title__title">
            What they're saying <br /> about Touch of Love Outreach
          </h2>
        </div>
        <div className="testimonial-two__carousel">
          <div className="testimonial-row">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="testimonial-two__single">
                  <div className="testimonial-two__content">
                    <div
                      className="testimonial-two__shape-1"
                      style={{ backgroundImage: 'url(/assets/images/shapes/testimonial-two-shape-1.png)' }}
                    ></div>
                    <p className="testimonial-two__text">{testimonial.text}</p>
                    <div className="testimonial-two__client-info">
                      <h4 className="testimonial-two__client-name">{testimonial.name}</h4>
                    </div>
                    <div className="testimonial-two__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;