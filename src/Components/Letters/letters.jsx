/* eslint-disable check-file/filename-naming-convention */
import React from "react";
import styles from "./Letter.module.scss";

const letter = (props) => {
  return (
    <div className={styles.letter}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.h1}>Letter From {props.title}</h1>
        </div>

        <div className={styles.pera}>
          <div className={styles.textImageContainer}>
            <img src={props.src} className={styles.letterPhoto} alt={styles.secGen} />
            <div>
              <p className={styles.peraHeading}>
                Dear Delegates
                {props.name === "Ronak Jain" ? <>, respected Faculty Advisors</> : null},
                and the Secretariat
              </p>
              <p className={`${styles.messagefrmFic} ${styles.p}`}>
                {props.name === "Ronak Jain" ? (
                  <>
                    As the Secretary-General of NITSMUN, I am thrilled to share our vision
                    and mission with you all. At NITSMUN, we are dedicated to fostering a
                    culture of rational thinking and honing public speaking skills among
                    our members.
                    <br />
                    <br />
                    Our aim is not only to simulate United Nations conferences but also to
                    empower individuals with the ability to articulate their perspectives
                    on global affairs. We believe that by mastering the art of diplomacy
                    and public speaking, our members can become effective advocates for
                    change in their communities and beyond.
                    <br />
                    <br />
                    Furthermore, we are committed to building a vibrant MUNing culture in
                    North Eastern India. By providing platforms for dialogue, debate, and
                    collaboration, we aspire to inspire the next generation of leaders and
                    change-makers in the region.
                    <br />
                    <br />
                    On behalf of my Secretariat, I welcome you all on this journey of
                    youthful explorations, solving critical concerns, and more importantly
                    voicing your zeal for peace. Ending my envelope with a notion: it
                    takes billions of pounds to stock the weapons, millions of lives to
                    victimise in wars, thousands of soldiers to fight a battle, but only
                    one pen to hunch the harmony!
                    <br />
                    <br />
                  </>
                ) : (
                  <>
                    Dear Delegates, Since its inception, NITSMUN has been dedicated to
                    building a strong MUN environment in the college. I personally feel
                    that their hard work and attention to detail are commendable.
                    I&apos;ve been connected to this club for quite some time, and it has
                    never disappointed me. I look forward to seeing it flourish even more
                    in the coming years.
                    <br />
                    <br />
                    This time, they are planning an even grander three-day annual
                    conference with three very exciting and unique committees. Held under
                    the banner of Incandescence 2024, NITSMUN is ready to welcome all
                    MUNners and non-MUNners from across the country.
                    <br />
                    <br />
                    To everyone reading this, I encourage you to explore the website to
                    learn more about this club and MUNs in general.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Warm Regards</p>
        <p>{props.name} </p>
        <p>{props.title}</p>
        <p>NITS MUN</p>
      </div>
    </div>
  );
};
export default letter;
