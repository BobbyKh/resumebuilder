import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const features = [
  {
    name: 'No experience',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: '1 year',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: '2 years',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: '3 years',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];

export default function Experience() {
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32" data-aos="fade-down">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Experience</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            How many years of experience do you have?
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.button
                key={feature.name}
                className={`relative pl-16 py-4 rounded-lg border ${selected === index ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-right"
                data-aos-duration="1000"
                onClick={() => setSelected(index)}
              >
                <dt className="flex items-center text-base font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-14">{feature.name}</span>
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </motion.button>
            ))}
          </div>
          {selected === 0 && (
            <p className="mt-6 text-lg text-gray-600">
              Are you a student?
              <Link
                to="/buildresume"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                {' '}
                Yes
              </Link>
            </p>
          )}
          {selected === 1 && (
            <div className="mt-6 flex items-center justify-center">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => navigate('/buildresume')}
              >
                <span className="ml-2">Continue</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

