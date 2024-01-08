import { useRef, useEffect, useContext } from 'react';
import { DomElementsContext } from '../../../Store/Context';

const About = () => {
  const aboutRef = useRef(null);
  const domCtx = useContext(DomElementsContext);

  useEffect(() => {
    const handleScroll = () => {
      const element = aboutRef.current;
      const rect = element.getBoundingClientRect();
      // const totalHeight = rect.bottom - rect.top;
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
    };
  });
  // const distanceToBottom =
  //   rect.bottom - (currentScroll + windowHeight) + 35.25;

  // domCtx.setAboutSectionElHeight(totalHeight);

  // console.log(
  //   rect.bottom,
  //   { totalHeight },
  //   { currentScroll },
  //   { windowHeight },
  //   { distanceToBottom },
  // );

  //   if (distanceToBottom <= 400) {
  //     console.log('400px until end');
  //   } else if (distanceToBottom <= 300) {
  //     console.log('300px until bottom');
  //   }
  // };

  // window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <section
      ref={aboutRef}
      className="mx-auto mb-10 text-justify sm:w-[90%] lg:w-[50rem]"
      // style={{ overflow: 'auto', maxHeight: '500px' }} // added scroll capability
    >
      <h2 className="font-scp text-6xl font-semibold text-termTop">About</h2>
      <p className="mt-4">
        Hello, I’m Tim, a Fullstack Software Engineer hailing from the San
        Francisco Bay Area. My engineering journey has been largely shaped by my
        passion for Full-stack development and a perpetual quest to innovate
        with Node.js. My portfolio boasts a diverse range of projects, from
        mobile to web applications, all achieved in the bustling atmosphere of
        Agile teams. Whether it's revamping legacy APIs for better efficiency or
        coaching a team to hackathon success, I relish the variety and challenge
        each project brings. My development philosophy centers on strategic
        foresight; I always try to foresee any potential setbacks a new feature
        might introduce and tackle them head-on with simple yet effective
        solutions. My prior role in the cycling industry taught me to
        communicate complex ideas in an understandable manner, a skill that has
        been invaluable in my tech career. Currently, I’m exploring job
        opportunities, as well as avenues for collaboration on open-source
        projects and hackathons. Feel free to reach out on LinkedIn to discuss
        potential ventures. In my downtime, cycling is my go-to—whether it's a
        long ride along the coast, fixing up bikes, or exploring new camping
        spots with my trusty bike and camping gear in tow.
      </p>
    </section>
  );
};

export default About;
