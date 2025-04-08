import "./index.scss";
import ladyFascia from "../../assets/lady-fascia.png";
import baby from "../../assets/baby.png";
import hpFirstImage from "../../assets/hp-1st-image.jpg";
import hpSecondImage from "../../assets/us-image.jpeg";
import hpThirdImage from "../../assets/hp-3rd-image.jpg";
import hpFourthImage from "../../assets/hp-4th-image.jpg";
import underConstruction from "../../assets/under-construction.png";

function ConstructionPage() {
  return (
    <div className="construction-page">
      <div className="construction-content">
        <div className="construction-content__construction">
          <div className="construction-content__construction__header">
            <img
              className="construction-content__construction__image"
              src={ladyFascia}
              alt="lady fascia"
            />
            <h1 className="construction-content__construction__text">
              Dearest reader, your visit is most appreciated. However, one must
              note that Lady Fascia is presently either attending a birth as
              Conscious Birth Doula or is engaged in the most delicate art of
              reconstructing this page. Do stay tuned, for what emerges shall be
              nothing short of splendid.
            </h1>
            <img
              className="construction-content__construction__image"
              data-right-img
              src={baby}
              alt="baby"
            />
          </div>
          <img
            src={underConstruction}
            alt="under construction"
            className="construction-content__construction__construction-img"
          />
        </div>
      </div>
    </div>
  );
}

export default ConstructionPage;
