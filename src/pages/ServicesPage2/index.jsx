import './index.scss';
import aboutFirstImage from '../../assets/services-first-img.jpg';
import aboutSecondImage from '../../assets/services-second-img.jpg';
import aboutThirdImage from '../../assets/services-third-img.jpg';
import aboutFourthImage from '../../assets/services-fourth-img.jpeg';
import aboutFifthImage from '../../assets/services-fifth-img.jpeg';
import Section from '../../components/Section';

function ServicesPage2() {
  return (
    <div className="services">
      <div className="services-content2">
        <Section
          sections={[
            {
              image: aboutFirstImage,
              imageAlt: 'Pregnant Belly',
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
              imageAlt: 'Couple',
              id: 'smaller-width',
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              image: aboutThirdImage,
              imageAlt: 'Forehead Release',
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
                    for calm, safety, and support. You can read more on my{' '}
                    <a
                      href="https://www.myofascialawakening.com"
                      target="_blank"
                      className="link"
                      rel="noopener noreferrer"
                    >
                      MFR website
                    </a>
                    .
                  </p>
                </div>
              ),
            },
          ]}
        />
        {/* 
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
        /> */}

        <Section
          sections={[
            {
              content: (
                <div>
                  <div className="pink-container">
                    <h2>Benefits of MFR</h2>
                    {/* <p style={{ margin: '0' }}>
                      Package of 5 myofascial release sessions with outcomes
                      such as...
                    </p> */}
                    <div className="two-columns">
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
                            Aligns the pelvis and removes restrictions to
                            support a smoother birth
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
                            Builds self-awareness and strengthens your
                            connection to your body
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
                            Softens and releases scar tissue from cesarean
                            births
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
                            Builds a closer relationship with your doula where
                            my touch becomes a cue for comfort and safety
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <h1>Packages and Pricing</h1>
        <p>
          I offer two ways to work together, depending on how deeply you want to
          prepare — physically, emotionally, and relationally — for your birth.
          Both options include continuous birth support and access to me
          throughout your pregnancy. The difference lies in how much time we
          spend preparing your body, nervous system, and inner landscape for
          birth.
        </p>

        <Section
          sections={[
            {
              content: (
                <div>
                  <div className="pink-container">
                    <h2>ALIGNED BIRTH EXPERIENCE - $2500</h2>
                    <i>A deeply embodied preparation for birth</i>
                    {/* <h2>$2500</h2> */}
                    <p>
                      This is for those who want to enter birth with as little
                      resistance as possible — in the body, the tissues, and the
                      nervous system. Through ongoing myofascial release and
                      conscious birth preparation, we build trust, attunement,
                      and safety long before labor begins.
                    </p>
                    <ul>
                      <li>
                        Complimentary prenatal consultation to meet, connect,
                        and assess fit
                      </li>
                      <li>
                        12 prenatal meetings, including:
                        <ul>
                          <li>
                            10 hours of Myofascial Release therapy, supporting:
                            <ul>
                              <li>pelvic and spinal balance</li>
                              <li>nervous system regulation</li>
                              <li>emotional and trauma release</li>
                              <li>
                                optimal conditions for physiological birth
                              </li>
                            </ul>
                          </li>
                          <li>
                            2 conscious birth preparation sessions, tailored to
                            your needs (education, mindset, surrender,
                            fear-clearing, partner integration)
                          </li>
                        </ul>
                      </li>
                      <li>Unlimited phone, text, and email support</li>
                      <li>Access to my lending library</li>
                      <li>On-call support for your birth from 37–42 weeks</li>
                      <li>
                        Continuous in-person support throughout labor and birth,
                        from active labor until baby is born and everyone is
                        settled
                      </li>
                      <li>Photos taken of your birth, if desired</li>
                      <li>
                        1 postpartum integration visit for emotional support,
                        debriefing, and early postpartum care
                      </li>
                    </ul>
                    <i>
                      This work is an invitation to prepare on all levels —
                      physical, emotional, and energetic — in service of a
                      smoother unfolding of birth.
                    </i>
                  </div>
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
                  <div className="pink-container">
                    <h2>CORE BIRTH SUPPORT - $1450</h2>
                    <i>Continuous doula care with focused preparation</i>
                    <p>
                      This option provides steady, grounded support throughout
                      pregnancy and birth, with space to address both practical
                      preparation and the body’s needs.
                    </p>
                    <ul>
                      <li>
                        <span>
                          Complimentary prenatal consultation to meet and assess
                          fit
                        </span>
                      </li>
                      <li>
                        <span>3 prenatal meetings, including:</span>
                        <ul>
                          <li>
                            <span>
                              1 Myofascial Release session to support physical
                              and emotional readiness
                            </span>
                          </li>
                          <li>
                            <span>
                              1 conscious birth preparation session, focused on
                              education, comfort measures, and clearing fear
                            </span>
                          </li>
                          <li>
                            <span>
                              1 additional prenatal session, tailored to your
                              needs (either bodywork or preparation)
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Unlimited phone, text, and email support</span>
                      </li>
                      <li>
                        <span>Access to my lending library</span>
                      </li>
                      <li>
                        <span>On-call support from 37–42 weeks</span>
                      </li>
                      <li>
                        <span>
                          Continuous in-person labor and birth support
                        </span>
                      </li>
                      <li>
                        <span>Photos taken of your birth, if desired</span>
                      </li>
                      <li>
                        <span>
                          1 postpartum visit for emotional support and birth
                          integration
                        </span>
                      </li>
                    </ul>
                    <i>
                      This offering is well-suited for those seeking dedicated
                      doula support, with an introduction to myofascial release
                      as a way of meeting and listening to the body.
                    </i>
                  </div>
                </div>
              ),
            },
            {
              image: aboutFourthImage,
              imageAlt: 'Baby',
              // id: "smaller-width",
            },
          ]}
        />

        {/* <Section
          sections={[
            {
              image: aboutFourthImage,
              imageAlt: "Baby",
              // id: "smaller-width",
            },
            {
              content: (
                <div>
                  <div className="pink-container">
                    <h2>HOLISTIC PARENTING ADD ON - $150</h2>
                    <p style={{ margin: "0" }}>
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
              ),
            },
          ]}
        /> */}
      </div>
    </div>
  );
}

export default ServicesPage2;
