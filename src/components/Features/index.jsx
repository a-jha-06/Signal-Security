import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Use only Pagination
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

const features = [
  {
    title: "Industrial Security",
    description:
      "We are a trusted provider of industrial security solutions, ensuring the safety and protection of your valuable assets.",
    icon: "🖥️",
  },
  {
    title: "Fire Fighting",
    description:
      "We offer trained security guards equipped with fire safety knowledge and skills to protect properties and lives during fire emergencies.",
    icon: "👩‍🚒",
  },
  {
    title: "Commercial & Retail Malls",
    description:
      "We offer protection services for commercial and retail malls, ensuring a safe and secure environment for both shoppers and businesses.",
    icon: "🛒",
  },
  {
    title: "Hospital Security",
    description:
      "Our security agents ensure an elite oversight and application of your entire hospital premises.",
    icon: "🏥",
  },
  {
    title: "Bank Security",
    description:
      "We provide specialized security solutions tailored for banking environments, ensuring asset safety and customer protection.",
    icon: "🏦",
  },
  {
    title: "Event Security",
    description:
      "Our team ensures smooth and secure management of events, from private gatherings to large public events.",
    icon: "🎉",
  },
];

const SlidingFeatureCards = () => {
  return (
    <div className="sliding-feature-cards">
      <h2 className="services-title">
        Take A Look At <span className="highlight">Services We Provide</span>
      </h2>
      <p className="services-subtitle">
        Specialized in the field of the following services
      </p>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            if (index === 0) {
              return `<span class="${className} custom-arrow">←</span>`;
            }
            if (index === features.length - 4) {
              return `<span class="${className} custom-arrow">→</span>`;
            }
            return `<span class="${className}"></span>`;
          },
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="service-card">
              <div className="service-icon">{feature.icon}</div>
              <h3 className="service-title">{feature.title}</h3>
              <p className="service-description">{feature.description}</p>
              <button className="know-more-button">Know More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingFeatureCards;
