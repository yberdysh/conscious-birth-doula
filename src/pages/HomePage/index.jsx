import "./index.scss";
import ladyFascia from "../../assets/lady-fascia.png";
import baby from "../../assets/baby.png";
import underConstruction from "../../assets/under-construction.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-content__construction">
          <div className="home-content__construction__header">
            <img
              className="home-content__construction__image"
              src={ladyFascia}
              alt="lady fascia"
            />
            <h1 className="home-content__construction__text">
              Dearest reader, your visit is most appreciated. However, one must
              note that Lady Fascia is presently either attending a birth as
              Conscious Birth Doula or is engaged in the most delicate art of
              reconstructing this page. Do stay tuned, for what emerges shall be
              nothing short of splendid.
            </h1>
            <img
              className="home-content__construction__image"
              data-right-img
              src={baby}
              alt="baby"
            />
          </div>
          <img
            src={underConstruction}
            alt="under construction"
            className="home-content__construction__construction-img"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
