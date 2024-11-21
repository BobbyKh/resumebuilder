import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Template from '../resume/Template';

const Portfolio = () => {
  return (
    <>
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
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4"
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <img
        className="w-full"
        src="https://via.placeholder.com/150"
        alt="Template"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Template Title</div>
        <p className="text-gray-700 text-base">
          This is a short description of the template. Use this card to showcase your templates.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #template
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #portfolio
        </span>
      </div>
    </div>
    </>
  );
};

<Template/>
// Usage of TemplateCard in Portfolio component
// Add this inside the return statement of the Portfolio component

export default Portfolio;

