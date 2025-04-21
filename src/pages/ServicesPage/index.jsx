import "./index.scss";
import aboutFirstImage from "../../assets/services-first-img.jpg";
import aboutSecondImage from "../../assets/services-second-img.jpg";
import aboutThirdImage from "../../assets/services-third-img.jpg";
import aboutFourthImage from "../../assets/services-fourth-img.jpeg";
import aboutFifthImage from "../../assets/services-fifth-img.jpeg";
import Section from "../../components/Section";

function ServicesPage() {
  return (
    <div className="services">
      <div className="services-content">
        <Section
          sections={[
            {
              image: aboutFirstImage,
              imageAlt: "Pregnant Belly",
            },
            {
              content: (
                <div>
                  <h1>Why Hire A Doula?</h1>
                  <p>
                    The word doula comes from the Greek, meaning “a woman who
                    serves.” For centuries, birth was a sacred and communal
                    experience—mothers, sisters, and grandmothers would gather
                    around to offer support, comfort, and wisdom during labor.
                  </p>
                  <p>
                    But as birth has become more medicalized and often removed
                    from our everyday lives, many of us no longer have that
                    circle of support. We've lost the village. We've lost the
                    natural exposure to birth.
                  </p>
                  <p>This is where doulas step in.</p>
                  <p>
                    A doula is someone who brings that lost connection
                    back—offering emotional grounding, practical guidance, and
                    loving presence throughout your birth journey. Whether it’s
                    your first or fifth baby, a doula holds space for your
                    power, your choices, and your experience.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Section
          // mobileReverseOrder
          sections={[
            {
              content: (
                <div>
                  <h1>Doula Outcomes</h1>
                  <div className="pink-container">
                    <ul>
                      <li>
                        <span>Shortened labor by 25%</span>
                      </li>

                      <li>
                        <span>39% reduction in C-section</span>
                      </li>
                      <li>
                        <span>Significantly lower intervention rates</span>
                      </li>
                      <li>
                        <span>Decreased rates of induction by 31%</span>
                      </li>
                      <li>
                        <span>Fewer birth complications</span>
                      </li>
                      <li>
                        <span>Higher satisfaction with birth experience</span>
                      </li>
                      <li>
                        <span>Increased breastfeeding success</span>
                      </li>
                      <li>
                        <span>
                          Lower rates of postpartum depression and anxiety
                        </span>
                      </li>
                      <li>
                        <span>Better newborn outcomes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              image: aboutSecondImage,
              imageAlt: "Couple",
              id: "smaller-width",
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              image: aboutThirdImage,
              imageAlt: "Forehead Release",
            },
            {
              content: (
                <div>
                  <h1>Bodywork Offerings (MFR)</h1>
                  <p>
                    I’m also a licensed massage therapist specializing in
                    myofascial release (MFR)—a powerful form of bodywork that
                    goes deeper than traditional massage. MFR works by releasing
                    restrictions in the fascia, the 3D web of connective tissue
                    that weaves through your entire body. This tissue holds the
                    imprint of past injuries, traumas, and stress, often without
                    us realizing it.
                  </p>
                  <p>
                    By integrating MFR into your care—whether during pregnancy,
                    birth, or postpartum—I can help ease physical tension,
                    release emotional blockages, and support a smoother, more
                    intuitive birthing experience and recovery.
                  </p>
                  <p>
                    Receiving bodywork during your journey is also a beautiful
                    way to deepen our connection. My hands become familiar and
                    grounding, so that during labor, my touch is already a cue
                    for calm, safety, and support.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Section
          sections={[
            {
              content: (
                <div>
                  <h1>Bodywork (MFR) Outcomes</h1>
                  <div className="pink-container two-columns">
                    <ul>
                      <li>
                        <span>
                          Eases stiffness, pain, and postural issues during
                          pregnancy
                        </span>
                      </li>
                      <li>
                        <span>
                          Relieves heartburn, nausea, and shortness of breath
                        </span>
                      </li>
                      <li>
                        <span>
                          Aligns the pelvis and removes restrictions to support
                          a smoother birth
                        </span>
                      </li>
                      <li>
                        <span>
                          Creates more space for baby to find an optimal
                          position—including helping breech babies to turn
                        </span>
                      </li>
                      <li>
                        <span>
                          Helps initiate labor when you're full term or when
                          labor has stalled
                        </span>
                      </li>
                      <li>
                        <span>
                          Deeply relaxes your body in preparation for birth
                        </span>
                      </li>
                      <li>
                        <span>
                          Builds self-awareness and strengthens your connection
                          to your body
                        </span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          Releases trapped emotions and past trauma (including
                          birth trauma) that may interfere with a smooth birth
                        </span>
                      </li>
                      <li>
                        <span>
                          Supports labor progression and can ease certain
                          complications during birth
                        </span>
                      </li>
                      <li>
                        <span>
                          Encourages faster postpartum healing and recovery
                        </span>
                      </li>
                      <li>
                        <span>
                          Softens and releases scar tissue from cesarean births
                        </span>
                      </li>
                      <li>
                        <span>
                          Helps relieve mastitis and supports more comfortable
                          breastfeeding
                        </span>
                      </li>
                      <li>
                        <span>
                          Builds a closer relationship with your doula where my
                          touch becomes a cue for comfort and safety
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <h1>Packages and Pricing</h1>

        <Section
          sections={[
            {
              content: (
                <div>
                  <div className="pink-container">
                    <h2>BIRTH PACKAGE - $1500</h2>
                    <ul>
                      <li>
                        <span>
                          1 complimentary prenatal visit before you sign on
                          where we get to know each other face to face and
                          evaluate fit
                        </span>
                      </li>
                      <li>
                        <span>2 prenatal meetings:</span>
                        <ul>
                          <li>
                            <span>
                              1 structured prenatal visit in your home to plan
                              for the birth, review comfort measures, and
                              unblock any fears or emotions weighing on you
                            </span>
                          </li>
                          <li>
                            <span>
                              1 additional unstructured prenatal visit to
                              discuss your birth or any concerns
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>
                          1 complimentary myofascial release session to release
                          restrictions weighing on your body or heart going into
                          the birth
                        </span>
                      </li>
                      <li>
                        <span>Unlimited phone, text, and email support</span>
                      </li>
                      <li>
                        <span>Access to my lending library</span>
                      </li>
                      <li>
                        <span>
                          On call 24/7 for your birth from 38-42 weeks
                        </span>
                      </li>
                      <li>
                        <span>
                          Continuous support from the moment you are in active
                          labor until after the baby is born and everyone is
                          settled
                        </span>
                      </li>
                      <li>
                        <span>Photos taken of your birth, if desired</span>
                      </li>
                      <li>
                        <span>
                          1 post-partum visit to provide emotional support,
                          lactation support, and debrief the birth
                        </span>
                      </li>
                      <li>
                        <span>
                          All individual myofascial release sessions at 10%
                          discount until 6 months postpartum
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              image: aboutFourthImage,
              imageAlt: "Baby",
              // id: "smaller-width",
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              image: aboutFifthImage,
              imageAlt: "Baby",
              // id: "smaller-width",
            },
            {
              content: (
                <div className="two-content">
                  <div>
                    <div className="pink-container">
                      <h2>BODYWORK (MFR) ADD ON - $600</h2>
                      <p>
                        5 additional sessions of myofascial release therapy to
                        be used prenatally to prepare for your birth.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="pink-container">
                      <h2>HOLISTIC PARENTING ADD ON - $150</h2>
                      <p>
                        Additional post-partum visit a few weeks after the birth
                        to share knowledge in a variety of holistic topics:
                      </p>
                      <ul>
                        <li>
                          Baby-wearing: includes trying out some wraps and
                          carriers that I own
                        </li>
                        <li>
                          Cloth diapering: includes a show and tell of cloth
                          diapers
                        </li>
                        <li>Elimination Communication</li>
                        <li>Bed Sharing</li>
                        <li>
                          Fertility/Cycle Knowledge: learning how to track the
                          return of your fertility naturally
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ServicesPage;
