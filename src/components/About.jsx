import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.wow');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-one" ref={sectionRef}>
      <div className="about-one__shape-box-1">
        <div
          className="about-one__shape-1"
          style={{ backgroundImage: 'url(/assets/images/shapes/about-one-shape-1.png)' }}
        ></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left">
              <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms">
                <div className="about-one__img">
                  <img src="/assets/images/resources/fk-1.jpg" alt="About Touch of Love Outreach" />
                </div>
                <div className="about-one__curved-circle-box">
                  <div className="curved-circle">
                    {/* <span className="curved-circle--item">
                      "Empowering Scotland's Vulnerable Communities"
                    </span> */}
                  </div>
                  <div className="about-one__curved-circle-icon">
                    <img src="/assets/images/resources/logo.png" alt="" />
                  </div>
                </div>
                <div className="about-one__shape-2 zoom-fade">
                  <img src="/assets/images/shapes/about-one-shape-2.png" alt="" />
                </div>
                <div className="about-one__shape-3 float-bob-y">
                  <img src="/assets/images/shapes/about-one-shape-3.png" alt="" />
                </div>
                <div className="about-one__shape-4 zoominout">
                  <img src="/assets/images/shapes/about-one-shape-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6" style={{ marginTop: '-50px' }}>
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">FORKA : Au Cœur de la Transformation Sociale</span>
                <h2 className="section-title__title">Soutenir la Jeunesse, Valoriser les Femmes, Servir le Congo</h2>
              </div>
              <p className="about-one__text">
                La Fondation Rachel Kamana (FORKA) est une organisation congolaise à but non lucratif, à vocation sociale,
                fondée par Rachel Kamana, entrepreneure engagée, visionnaire inspirante et coach en leadership transformationnel.
                Forte de sa mission profondément ancrée dans la promotion du progrès social,
                FORKA s'investit activement dans l’éveil et le renforcement du leadership féminin ainsi que dans l'autonomisation de la jeunesse congolaise.
              </p>
              <div className="about-one__fund">
                <p className="about-one__fund-text">
                  Notre Vision
                </p>
              </div>
              <p className="about-one__text">
                Faire de la jeunesse congolaise et surtout de la femme une force transformatrice enracinée dans sa terre, 
                pour que chaque communauté devienne un centre de leadership durable, autonome et respecté.
              </p>
              <br />
              <a href="/our-purpose" className="thm-btn about-one__btn">en savoir plus</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;