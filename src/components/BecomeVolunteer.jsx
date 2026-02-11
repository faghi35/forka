const BecomeVolunteer = () => {
  return (
    <section className="become-volunteer-one">
      <div className="become-volunteer-one__bg-box">
        <div
          className="become-volunteer-one__bg jarallax"
          data-jarallax=""
          data-speed="0.2"
          data-imgposition="50% 0%"
          style={{ backgroundImage: 'url(/assets/images/resources/fk-1.jpg)' }}
        ></div>
      </div>
      <div
        className="become-volunteer-one__shape-1"
        style={{ backgroundImage: 'url(/assets/images/shapes/become-volunteer-shape-1.png)' }}
      ></div>
      <div className="container">
        <div className="become-volunteer-one__inner">
          <p className="become-volunteer-one__sub-title">
            FORKA vous invite, chers bailleurs de fonds et partenaires, à vous joindre à nous dans cette noble quête.
          </p>
          <h5 className="become-volunteer-one__title">
            Ensemble, bâtissons des ponts d'espoir et créons des vagues de changement qui transforment des vies, des communautés et des nations.
          </h5>
          <div className="become-volunteer-one__btn-box">
            <a href="/become-volunteer" className="thm-btn become-volunteer-one__btn">Devenir membre</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVolunteer;