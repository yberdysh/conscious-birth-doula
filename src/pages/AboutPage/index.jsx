import "./index.scss";
import aboutFirstImage from "../../assets/about-1st.jpeg";
import aboutSecondImage from "../../assets/about-2nd.jpg";
import aboutThirdImage from "../../assets/about-3rd.jpg";
import Section from "../../components/Section";

function AboutPage() {
  return (
    <div className="about">
      <div className="about-content">
        <Section
          sections={[
            {
              image: aboutFirstImage,
              imageAlt: "Lady Fascia",
            },
            {
              content: (
                <div className="home-content__section">
                  <h1>About Me</h1>
                  <p>Hi, I’m Yevgeniya—The Conscious Birth Doula.</p>
                  <p>
                    I support people like you to have powerful, peaceful, and
                    conscious homebirths. I'm also a myofascial release
                    therapist known as Lady Fascia. I use gentle bodywork to
                    release physical tension and emotional trauma so your body
                    is free to birth the way it was meant to.
                  </p>
                  <p>
                    My passion is helping you clear fear, reclaim your power,
                    and prevent or heal birth trauma. I believe birth is not
                    just a medical event—it’s a sacred rite of passage. You
                    deserve to feel safe, supported, and in charge.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              content: (
                <div className="home-content__section">
                  <h1>My Story</h1>
                  <p>
                    Long before I became a mother, I imagined my birth:
                    surrounded by love, in a birth pool, locking eyes with my
                    partner, and weeping tears of joy as I held our baby for the
                    first time.
                  </p>
                  <p>
                    But I also carried fear—
                    <b>
                      What if it hurts too much? What if I’m not strong enough?
                      What if something goes wrong?
                    </b>
                    I wondered if I should “play it safe” and choose the
                    hospital.
                  </p>
                  <p>
                    Then I had two transformational homebirths. I experienced a
                    <i>pain-free, empowering, and deeply emotional birth</i>.
                    And I’m here to tell you—<i>it’s possible</i>. Even if it’s
                    your first baby. Even if you’re scared. You were made for
                    this.
                  </p>
                </div>
              ),
            },
            {
              image: aboutSecondImage,
              imageAlt: "Water Birth",
              id: "smaller-width",
              imageCaption:
                "The moment of birth. This picture was taken at 5:25, the same time marked on my daughter’s birth certificate. The moment she emerged, I scooped her up, and she took her first breath.",
            },
          ]}
        />

        <Section
          sections={[
            {
              image: aboutThirdImage,
              imageAlt: "Pregnant Lady",
            },
            {
              content: (
                <div className="home-content__section">
                  <h1>My Philisophy</h1>
                  <p>
                    We’ve been conditioned to fear birth. We’re taught that our
                    bodies are broken and that someone else needs to manage the
                    process for us. But this is a lie—and a tragedy.
                  </p>
                  <p>
                    Why conscious birth? Conscious birth means making informed
                    choices, reclaiming your autonomy, and experiencing birth as
                    it was meant to be: powerful, primal, beautiful.
                  </p>
                  <p>
                    Birth is not something to get through. It’s an awakening.
                    It’s transcendence. In the trust and surrender lies great
                    power.
                  </p>
                  <p>
                    And I’m here to walk that path with you. Let’s team up to
                    make your birth one you’ll remember with joy and pride.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default AboutPage;
