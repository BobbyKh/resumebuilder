import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-4"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <h1
        className="text-4xl font-bold mb-6 text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="false"
      >
        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
        My Portfolio
      </h1>
      <p
        className="text-lg text-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1000"
        data-aos-once="false"
      >
        Explore my work and projects.
      </p>
    </div>
  );
};

export default Portfolio;

