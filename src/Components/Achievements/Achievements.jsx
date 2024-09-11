import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Achievements.module.scss";
import "swiper/css";
import "swiper/css/navigation";
const Collaboration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>ACHIEVEMENTS</div>
      <div className={styles.image}>
        <Swiper
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation]}
          className={styles.innerCont}
        >
          <SwiperSlide className={styles.photoCont}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1726055850/nitsmun/WhatsApp_Image_2024-09-11_at_12.46.33_PM_z5rlcl.webp"
              alt="achievement"
              className={styles.photo}
            />
            <div className={styles.text}>
              {/* <p>
                {" "}
                Collaboration with NIT Agartala MUN (NITAMUN): NIT Silchar MUN (NITSMUN)
                collaborated with NIT Agartala MUN (NITAMUN), facilitating the inaugural edition
                of the online NITAMUN on January 6th and 7th, 2024. This collaboration provided
                participants with a platform for engaging in virtual Model United Nations
                sessions, fostering dialogue and learning in a digital environment.
                </p>
                <br />
                <p>
                Student Achievements: During the NIT Agartala MUN held on January 6th and 7th,
                three students from the B.Tech 2026 batch, Bhaswar Agnivesh, Aalya Jain, and
                Mayurakhi Khaund, represented NIT Silchar with distinction. Bhaswar Agnivesh,
                from the ECE department, showcased outstanding performance, earning a High
                Commendation in UNGA DISEC. Similarly, Aalya Jain, also from the ECE Department,
                received a Verbal Mention in the UN Human Rights Council. Their success reflects
                NIT Silchar&apos;s commitment to excellence in the North East MUN circuit,
                bringing pride to our institution
                </p> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Collaboration;
