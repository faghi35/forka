const Events = () => {
  return (
    <section className="events-two">
      <div
        className="events-two-shape-1"
        style={{ backgroundImage: 'url(/assets/images/shapes/events-two-shape-1.png)' }}
      ></div>
      <div
        className="events-two-bg"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/events-two-bg.png)' }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="events-two__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Aidez. Donnez. Transformez avec FORKA.</span>
                <h2 className="section-title__title">Trouve une cause qui te tient à cœur et soutiens-la!</h2>
              </div>
              <p className="events-two__text">
                Chaque don renforce l’éducation agro-pastorale, le leadership féminin et la souveraineté alimentaire. 
                En donnant, vous participez à l’éveil d’une jeunesse responsable et à la valorisation du “Made in Congo”.
              </p>
              {/* <a href="/award-6" className="thm-btn events-two__btn">Read More</a> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="events-two__right">
              <div className="events-two__right-bg-box">
                <div
                  className="events-two-shape-2"
                  style={{ backgroundColor: 'url(/assets/images/shapes/events-two-shape-2.pn)' }}
                ></div>
              </div>
              <ul className="list-unstyled events-two__list">
                <li>
                  <div className="events-two__img">
                    {/* <img src="/assets/images/events/event1.jpg" alt="People's Choice Award" /> */}
                  </div>
                  <div className="events-two__content">
                    <h3 className="events-two__title"><br /><br />Autonomisation de la Jeunesse</h3>
                  </div>
                </li>
                <li>
                  <div className="events-two__img">
                    {/* <img src="/assets/images/events/event2.jpg" alt="Charity of the year" /> */}
                  </div>
                  <div className="events-two__content">
                    <ul className="list-unstyled events-two__meta">
                      <li></li>
                      <li></li>
                    </ul>
                    <h3 className="events-two__title"><br /><br />Leadership Feminin</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;