import "./index.scss";
import hpFirstImage from "../../assets/hp-1st-image.jpg";
import hpSecondImage from "../../assets/us-image.jpeg";
import hpThirdImage from "../../assets/hp-3rd-image.jpg";
import hpFourthImage from "../../assets/hp-4th-image.jpg";
import Section from "../../components/Section";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-content__banner">
          <img
            className="home-content__banner__image"
            src={hpFirstImage}
            alt="treatment room"
          />
          <h1 className="home-content__banner__text">
            Your birth is a <br /> radiant and conscious transformation
          </h1>
        </div>

        <Section
          mobileReverseOrder
          sections={[
            {
              image: hpSecondImage,
              imageAlt: "Lady Fascia and Her Partner",
            },
            {
              content: (
                <div className="home-content__section">
                  <h1>I’m Yevgeniya - aka Lady Fascia</h1>
                  <p>
                    know what it’s like to crave an intimate, natural birth—yet
                    still question whether homebirth is safe or even possible,
                    especially with your first baby.
                  </p>
                  <p>
                    I believe in conscious choices and in reclaiming our power
                    through birth. I know the weight of doubt—and the freedom
                    that comes from releasing the fears we’ve been conditioned
                    to hold. I also know what it takes to prevent, and to heal
                    from, birth trauma.
                  </p>
                  <p>
                    That’s why I support people like you in reclaiming their
                    births, releasing fear and trauma, and stepping into an
                    experience that’s truly empowering.
                  </p>
                </div>
              ),
              buttons: [
                {
                  text: "Contact Me",
                  link: "/contact",
                  type: "blue",
                },
                {
                  text: "Read My Story",
                  link: "/about",
                  type: "blue",
                },
              ],
            },
          ]}
        />

        <Section
          sections={[
            {
              content: (
                <div className="home-content__section">
                  <p>
                    Do you believe your body was made to give birth—just like
                    women have done for thousands of years—and that it doesn’t
                    have to be scary or unbearably painful, even if you still
                    have some fears?
                  </p>
                  <p>
                    Are you hoping to avoid birth trauma—for both you and your
                    baby—and give yourself the best chance at a peaceful,
                    empowering experience?
                  </p>
                  <p>
                    Do you feel like the medical system’s high rates of
                    intervention and C-sections don’t always reflect what’s
                    truly necessary?
                  </p>
                  <p>
                    Maybe you simply want to birth in a safe, intimate
                    environment, surrounded only by people who help you feel
                    calm and confident.
                  </p>
                </div>
              ),
              // buttons: [
              //   {
              //     text: "Doula Services",
              //     link: "/services",
              //     type: "blue",
              //   },
              // ],
            },
            {
              image: hpThirdImage,
              imageAlt: "Pregnant Lady",
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              image: hpFourthImage,
              imageAlt: "Birth Room",
            },
            {
              content: (
                <div className="home-content__section">
                  <p>
                    Still unsure if natural birth with a doula is for you? Give
                    me a call if...
                  </p>
                  <ul>
                    <li>
                      You're unfamiliar with the cascade of hospital
                      interventions that can derail a birth and you’d like to
                      learn more.
                    </li>
                    <li>
                      You’d like to try for an unmedicated birth but you’re not
                      sure.
                    </li>
                    <li>
                      You‘re at the start of your pregnancy and unsure where you
                      start.{" "}
                    </li>
                    <li>
                      You’re trying to conceive and would like to learn more
                      about fertility and what to do next.{" "}
                    </li>
                  </ul>
                  <p>Or check out my resources page!</p>
                </div>
              ),
              buttons: [
                {
                  text: "Contact Me",
                  link: "/contact",
                  type: "blue",
                },
                // {
                //   text: "Resources",
                //   link: "/resources",
                //   type: "blue",
                // },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
