import "./index.scss";
import aboutFirstImage from "../../assets/services-first-img.jpg";
import aboutSecondImage from "../../assets/services-second-img.jpg";
import aboutThirdImage from "../../assets/services-third-img.jpg";
import aboutFourthImage from "../../assets/services-fourth-img.jpeg";
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
                  <h1>DOULA OUTCOMES</h1>
                  <div className="pink-container">
                    <ul>
                      <li>Shortened labor by 25%</li>
                      <li>39% reduction in C-section</li>
                      <li>Significantly lower intervention rates</li>
                      <li>Decreased rates of induction by 31%</li>
                      <li>Fewer birth complications</li>
                      <li>Higher satisfaction with birth experience</li>
                      <li>Increased breastfeeding success</li>
                      <li>Lower rates of postpartum depression and anxiety</li>
                      <li>Better newborn outcomes</li>
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
                  <h1>BODYWORK (MFR) OUTCOMES</h1>
                  <div className="pink-container two-columns">
                    <ul>
                      <li>
                        Eases stiffness, pain, and postural issues during
                        pregnancy
                      </li>
                      <li>
                        Relieves heartburn, nausea, and shortness of breath
                      </li>
                      <li>
                        Aligns the pelvis and removes restrictions to support a
                        smoother birth
                      </li>
                      <li>
                        Creates more space for baby to find an optimal
                        position—including helping breech babies to turn
                      </li>
                      <li>
                        Helps initiate labor when you're full term or when labor
                        has stalled
                      </li>
                      <li>Deeply relaxes your body in preparation for birth</li>
                      <li>
                        Builds self-awareness and strengthens your connection to
                        your body
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Releases trapped emotions and past trauma (including
                        birth trauma) that may interfere with a smooth birth
                      </li>
                      <li>
                        Supports labor progression and can ease certain
                        complications during birth
                      </li>
                      <li>Encourages faster postpartum healing and recovery</li>
                      <li>
                        Softens and releases scar tissue from cesarean births
                      </li>
                      <li>
                        Helps relieve mastitis and supports more comfortable
                        breastfeeding
                      </li>
                      <li>
                        Builds a closer relationship with your doula where my
                        touch becomes a cue for comfort and safety
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <h1 className="outside-title">BIRTH PACKAGE - $1500</h1>
        <Section
          sections={[
            {
              content: (
                <div>
                  <div className="pink-container">
                    <ul>
                      <li>
                        1 complimentary prenatal visit before you sign on where
                        we get to know each other face to face and evaluate fit
                      </li>
                      <li>
                        1 structured prenatal visit in your home to plan for the
                        birth, review comfort measures, and unblock any fears or
                        emotions weighing on you
                      </li>
                      <li>
                        Choice of:
                        <ul>
                          <li>
                            1 additional unstructured prenatal visit to discuss
                            your birth or any concerns
                          </li>
                          <li>
                            1 complimentary myofascial release session to
                            release restrictions weighing on your body or heart
                            going into the birth
                          </li>
                        </ul>
                      </li>
                      <li>Unlimited phone, text, and email support</li>
                      <li>Access to my lending library</li>
                      <li>On call 24/7 for your birth from 38-42 weeks</li>
                      <li>
                        Continuous support from the moment you are in active
                        labor until after the baby is born and everyone is
                        settled
                      </li>
                      <li>Photos taken of your birth, if desired</li>
                      <li>
                        1 post-partum visit to provide emotional support,
                        lactation support, and debrief the birth
                      </li>
                      <li>
                        All individual myofascial release sessions at 10%
                        discount until 6 months postpartum
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
          sections={[
            {
              image: aboutFourthImage,
              imageAlt: "Baby",
              // id: "smaller-width",
            },
            {
              content: (
                <div className="two-content">
                  <div>
                    <h1>BODYWORK (MFR) ADD ON - $600</h1>
                    <div className="pink-container">
                      <p>
                        5 additional sessions of myofascial release therapy to
                        be used prenatally to prepare for your birth.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1>HOLISTIC PARENTING ADD ON - $150</h1>
                    <div className="pink-container">
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
