import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowCapture, Glow } from "@codaworks/react-glow";
let FadeIn = ({
  children,
  className,
  noVertical,
  delay,
  viewTriggerOffset,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: viewTriggerOffset ? "-128px" : "0px",
  });
  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: noVertical ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      animate={inView ? "animate" : "initial"}
      className={className}
      initial={false}
      ref={ref}
      transition={{
        duration: 1,
        delay: delay || 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.div>
  );
};

let AboutMe = (props) => {
  return (
    <Glow className="purple">
      <div
        className={
          "gloww  mt-4 turbopackCardBg p-12 md:mx-0 md:mt-0 rounded-2xl sm:min-h-[320px]  md:flex md:justify-between md:items-center   "
        }
      >
        <div className="mb-4 md:mb-0 md:order-last">
          <img
            src="/images/pic.png"
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]  mx-auto md:mx-0"
          />
        </div>

        <div className="flex flex-col justify-between text-center  md:text-left md:w-[70%] ">
          <h1 className="mb-2 font-serif text-6xl font-black text-transparent select-none md:text-7xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">
            {props.h}
          </h1>
          <div className="space-y-2 dark:text-white">
            <p className="mt-3 text-xl md:text-2xl select-none">{props.d}</p>
          </div>

          <div>
            <Link href={"/about"}>
              <button className="px-6 py-3 mx-auto mt-6 mb-6 bg-white  drop-shadow-lg  transition transform hover:subpixel-antialiased  hover:scale-105   rounded-full tetx-xl text-black font-serif font-semibold">
                More about me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Glow>
  );
};
let CardHeader = (props) => {
  return (
    <div className="mt-12 text-center h-[150px]">
      <div className="mb-1 text-xl ">{props.t}</div>
      <div className="font-serif text-4xl font-bold">{props.b}</div>
    </div>
  );
};

let Heading = (props) => {
  return (
    <div className="my-12 mt-24 font-serif text-6xl font-bold text-center text-black dark:text-white">
      {props.children}
    </div>
  );
};
let ExpansionInd = () => {
  return (
    <Link href="/work/expansion-india">
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card turbopackCardBg overflow-clip group hover:scale-105">
        <CardHeader t="Revolut" b="Expansion" />

        <div className="relative w-full h-full ">
          <div>
            <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
          </div>
          <div>
            <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
          </div>
          <div>
            <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
let RevSnap = () => {
  return (
    <Link href="/work/building-snap">
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card turbopackCardBg group hover:scale-105">
        <CardHeader t="Revolut" b="Building Snap" />
        <div className="bg-[url('/images/snapcov.png')]  w-[500px]  h-full md:h-full ml-24 md:ml-16  mb-4  bg-contain bg-no-repeat group-hover:-translate-x-8 transition ease-out duration-300" />
      </div>
    </Link>
  );
};
let ZomTrack = () => {
  return (
    <Link href="/work/zomato">
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card turbopackCardBg group hover:scale-105">
        <CardHeader t="Zomato" b="Order Tracking" />
        <div className="relative w-full h-full ">
          <div>
            <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 group-hover:translate-x-12    top-20  transition ease-out duration-300   " />
          </div>
          <div>
            <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 group-hover:translate-x-2 top-12  transition ease-out duration-300  " />
          </div>
          <div>
            <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto group-hover:-translate-x-12  left-0 right-0 top-4 transition ease-out duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

let ExpCar = () => {
  return (
    <Link href="/work/expedia">
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card turbopackCardBg group hover:scale-105">
        <CardHeader t="Expedia" b="Car Rental" />
        <div className="relative w-full h-full ">
          <div>
            <div className="bg-[url('/images/car.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   group-hover:translate-x-12 right-0 top-16  transition ease-out duration-300   " />
          </div>
          <div>
            <div className="bg-[url('/images/car.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-12 top-16   transition ease-out duration-300  " />
          </div>
          <div>
            <div className="bg-[url('/images/car.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

let ZomPartner = () => {
  return (
    <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card turbopackCardBg hover:scale-105 group">
      <CardHeader t="Zomato" b="Partner App" />
      <div className="relative w-full h-full ">
        <div>
          <div className="bg-[url('/images/medal.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 group-hover:translate-x-12    top-20  transition ease-out duration-300   " />
        </div>
        <div>
          <div className="bg-[url('/images/medal.png')]  w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 group-hover:translate-x-2 top-12  transition ease-out duration-300  " />
        </div>
        <div>
          <div className="bg-[url('/images/medal.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto group-hover:-translate-x-12  left-0 right-0 top-4 transition ease-out duration-300" />
        </div>
      </div>
    </div>
  );
};
let RevOpb = () => {
  return (
    <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card turbopackCardBg hover:scale-105 group">
      <CardHeader t="Revolut" b="Open Banking" />
      <div className="relative w-full h-full transition ease-in-out group-hover:-translate-y-6 ">
        <div>
          <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
        </div>
        <div>
          <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
        </div>
        <div>
          <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
        </div>
      </div>
    </div>
  );
};
let SectionCasestudy = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <FadeIn delay={0.5}>
        <ExpansionInd />
      </FadeIn>
      <FadeIn delay={0.6}>
        <RevSnap />
      </FadeIn>
      <FadeIn delay={0.7}>
        <ZomTrack />
      </FadeIn>
      <FadeIn delay={0.5}>
        <ExpCar />
      </FadeIn>
      <FadeIn delay={0.7}>
        <ZomPartner />
      </FadeIn>
      <FadeIn delay={0.9}>
        <RevOpb />
      </FadeIn>
    </div>
  );
};

let Home = () => {
  return (
    
      <section className="  max-w-[1140px] mx-auto mt-24 md:px-0 text-black">
        <FadeIn delay={0.2}>
        <GlowCapture>
          <AboutMe
            h="Hello Everyone!"
            d="I am Tushar Debnath a product designer and design technologist with
            10+ years of experience building products, design systems and design
            tools"
          />
          </GlowCapture>
        </FadeIn>

        <FadeIn delay={0.5}>
          <Heading className="mt-12">Case studies</Heading>
          <SectionCasestudy />
        </FadeIn>
      </section>
    
  );
};
export default Home;
