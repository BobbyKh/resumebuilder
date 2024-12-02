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

  const handleScroll = () => {
    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('animate');
      } else {
        el.classList.remove('animate');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0b1320] shadow-md ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className=" text-3xl sm:text-4xl font-semibold tracking-tight text-[#d5420b]">
            How many years of experience do you have?
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-24 lg:max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.button
                key={feature.name}
                className={`relative pl-14 sm:pl-16 py-3 sm:py-4 rounded-lg border shadow-2xl border-spacing-2 animate-on-scroll text-white ${selected === index ? 'border-[#d5420b]' : 'border-white'}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(index)}
              >
                <dt className="flex items-center text-sm sm:text-base font-semibold text-[#ffffff]">
                  <div className="absolute left-0 top-0 flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-lg bg-[#d5420b]">
                    <feature.icon aria-hidden="true" className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <span className="ml-12 sm:ml-14">{feature.name}</span>
                </dt>
                <dd className="mt-1 sm:mt-2 text-sm sm:text-base text-white">{feature.description}</dd>
              </motion.button>
            ))}
          </div>
          {selected === 0 && (
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white">
              Are you a student?
              <Link
                to="/buildresume"
                className="font-semibold text-[#d5420b] hover:text-blue-700"
              >
                {' '}
                Yes
              </Link>
            </p>
          )}
          {selected === 1 && (
            <div className="mt-4 sm:mt-6 flex items-center justify-center">
              <button
                type="button"
                className="relative inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 border border-transparent shadow-sm text-sm sm:text-base font-medium rounded-md text-white bg-[#d5420b] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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


