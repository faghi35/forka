import { useEffect, useRef } from 'react';

const causesData = [
  {
    id: 1,
    image: '/assets/images/resources/fk-2.jpg',
  },
  {
    id: 2,
    image: '/assets/images/resources/fk-3.jpg',
  }
];

const internationalCause = {
  id: 5,
  image: '/assets/images/resources/fk.jpg',
};

const Causes = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.wow');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="causes-one" style={{ marginTop: '100px' }} ref={sectionRef}>
      <div className="container">
        {/* <div className="section-title text-center">
          <h2 className="section-title__title">What we do</h2>
        </div> */}
        <div className="row">
          {causesData.map((cause, index) => (
            <div
              key={cause.id}
              className={`col-xl-6 col-lg-6 wow fadeInUp`}
              data-wow-delay={`${(index + 1) * 100}ms`}
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <a href={cause.link}>
                    <img src={cause.image} alt={cause.title} />
                  </a>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <a href={cause.link}>{cause.title}</a>
                  </h3>
                  <p className="causes-one__text">
                    {cause.text}
                    {cause.link1 && (
                      <>
                        {' '}
                        <a href={cause.link1} style={{ color: 'green' }} target="_blank" rel="noreferrer">
                          {cause.link1Text}
                        </a>
                      </>
                    )}
                    {cause.text2 && cause.text2}
                    {cause.link2 && (
                      <>
                        {' '}
                        <a href={cause.link2} style={{ color: 'green' }} target="_blank" rel="noreferrer">
                          {cause.link2Text}
                        </a>
                      </>
                    )}
                    {cause.extraLinks && (
                      <>
                        <br />Discover more:
                        <br />Summer Programme Highlights -{' '}
                        <a href="https://youtu.be/bnphpMxwm5U" style={{ color: 'green' }} target="_blank" rel="noreferrer">
                          Click here
                        </a>
                        <br />
                        Aberdeen Mela performance -{' '}
                        <a href="https://youtu.be/iH9eWwmqj0Q" style={{ color: 'green' }} target="_blank" rel="noreferrer">
                          Click here
                        </a>
                        <br /> Press & Journal News Coverage of Our Outings -{' '}
                        <a
                          href="https://www.pressandjournal.co.uk/fp/news/aberdeen-aberdeenshire/4661173/hundreds-attend-new-yam-festival-in-aberdeen/"
                          style={{ color: 'green' }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>{' '}
                        and{' '}
                        <a
                          href="https://www.pressandjournal.co.uk/fp/news/aberdeen-aberdeenshire/4691419/in-pictures-more-than-10000-move-and-groove-to-the-return-of-aberdeen-mela/"
                          style={{ color: 'green' }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>
                      </>
                    )}
                    {cause.id === 3 && <span>.</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="expandSection">
          <div className="wow fadeInUp" data-wow-delay="200ms">
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src={internationalCause.image} alt={internationalCause.title} />
              </div>
              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href={internationalCause.link}>{internationalCause.title}</a>
                </h3>
                <p className="causes-one__text">{internationalCause.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;