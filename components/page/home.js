import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


import Slider from "react-slick";

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
    <div
      className={
        " mt-4  p-3 md:p-12 md:mx-0 md:mt-0 rounded-2xl sm:min-w-[320px]  md:flex md:justify-between md:items-center   "
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

        <div className="mt-4">
          <Link href={"/about"}>
            <button className="px-6 py-3 mx-auto mt-6 mb-6 bg-white  drop-shadow-lg  transition transform hover:subpixel-antialiased  hover:scale-105   rounded-full tetx-xl text-black font-serif font-semibold">
              More about me
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

let Locked = (props) =>{
  return(
    <div className="relative top-6 left-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
  </div>
  )
}
let CardHeader = (props) => {
  return (
    <div className="mt-12 text-center  h-[150px]">
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
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card bg-white/5  overflow-clip group hover:scale-105">
        <Locked />
        <CardHeader t="Revolut" b="Building for India" />

        <div className="relative w-full h-full ">
          <div>
            <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 md:group-hover:translate-x-8 right-0 top-12 md:group-hover:rotate-6 transition ease-out duration-300   " />
          </div>
          <div>
            <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 md:group-hover:-translate-x-8 top-12 md:group-hover:-rotate-6 transition ease-out duration-300  " />
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
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card bg-white/5 group hover:scale-105">
      
        <CardHeader t="Revolut" b="Snap App" />
        <div className="bg-[url('/images/snapcov.png')]  w-[500px]  h-full md:h-full ml-24 md:ml-16  mb-4  bg-contain bg-no-repeat md:group-hover:-translate-x-8 transition ease-out duration-300" />
      </div>
    </Link>
  );
};
let ZomTrack = () => {
  return (
    <Link href="/work/zomato">
      
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card bg-white/5 group hover:scale-105">
      

      
        <CardHeader t="Zomato" b="Order Tracker" />
        <div className="relative w-full h-full ">
          <div>
            <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 md:group-hover:translate-x-12    top-20  transition ease-out duration-300   " />
          </div>
          <div>
            <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 md:group-hover:translate-x-2 top-12  transition ease-out duration-300  " />
          </div>
          <div>
            <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto md:group-hover:-translate-x-12  left-0 right-0 top-4 transition ease-out duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

let ExpCar = () => {
  return (
    <Link href="/work/expedia">
      <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card bg-white/5 group hover:scale-105">
        <CardHeader t="Expedia" b="Car Rental" />
        <div className="relative w-full h-full ">
          <div>
            <div className="bg-[url('/images/car.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   md:group-hover:translate-x-12 right-0 top-16  transition ease-out duration-300   " />
          </div>
          <div>
            <div className="bg-[url('/images/car.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 md:group-hover:-translate-x-12 top-16   transition ease-out duration-300  " />
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
    <Link href="/work/partner-app">
    <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card bg-white/5 hover:scale-105 group">
    <Locked />
      <CardHeader t="Zomato" b="Partner App" />
      <div className="relative w-full h-full ">
        <div>
          <div className="bg-[url('/images/medal.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 md:group-hover:translate-x-12    top-20  transition ease-out duration-300   " />
        </div>
        <div>
          <div className="bg-[url('/images/medal.png')]  w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 md:group-hover:translate-x-2 top-12  transition ease-out duration-300  " />
        </div>
        <div>
          <div className="bg-[url('/images/medal.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto md:group-hover:-translate-x-12  left-0 right-0 top-4 transition ease-out duration-300" />
        </div>
      </div>
    </div>
    </Link>
  );
};
let RevWealthPro = () => {
  return (
    <Link href="/work/wealth-pro">
    <div className="flex flex-col justify-between p-0 text-white transition duration-300 ease-out cursor-pointer project-card bg-white/5 hover:scale-105 group">
    <Locked />
      <CardHeader t="Revolut" b="Wealth Protection" />
      <div className="relative w-full h-full transition ease-in-out md:group-hover:-translate-y-6 ">
        <div>
          <div className="bg-[url('/wp/01.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   md:group-hover:translate-x-8 right-0 top-12 md:group-hover:rotate-6 transition ease-out duration-300   " />
        </div>
        <div>
          <div className="bg-[url('/wp/02.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 md:group-hover:-translate-x-8 top-12 md:group-hover:-rotate-6 transition ease-out duration-300  " />
        </div>
        <div>
          <div className="bg-[url('/wp/03.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
        </div>
      </div>
    </div>
    </Link>
  );
};
let SectionCasestudy = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       
      
      <FadeIn delay={0.2}>
        <ZomTrack />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ExpCar />
      </FadeIn>
      <FadeIn delay={0.4}>
        <ZomPartner />
      </FadeIn>
    </div>
  );
};

let SectionLogoSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,

    cssEase: "linear",

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[20px] mb-[80px]  py-6    relative">
      <div className=" absolute top-0 left-0 w-[60px]  h-full bg-gradient-to-r from-[#111111] to-[#11111100] z-10" />
      <div className=" absolute top-0 right-0 w-[60px]  h-full bg-gradient-to-r from-[#11111100] to-[#111111] z-10" />
      <Slider {...settings}>
        <div className="  w-full ">
          <img src="/logo/Revolut.svg" className=" mx-auto" />
        </div>
        <div className="flex justify-center w-full">
          <img src="/logo/Zomato.svg" className=" mx-auto" />
        </div>

        <div className="flex justify-center w-full">
          <img src="/logo/Expedia.svg" className=" mx-auto" />
        </div>
        <div className="flex justify-center w-full">
          <img src="/logo/Hike.svg" className=" mx-auto" />
        </div>
        <div className="flex justify-center w-full">
          <img src="/logo/Makemytrip.svg" className=" mx-auto" />
        </div>
      </Slider>
    </div>
  );
};
let Home = () => {
  return (
    <section className="  max-w-[1140px] mx-auto mt-24 md:px-0 z-10 text-black">
      <FadeIn delay={0.2}>
        <AboutMe
          h="Hello Everyone!"
          d="I'm Tushar Debnath, a product designer and design technologist with more than ten years of expertise in shaping products and creating impactful user experiences"
        />
      </FadeIn>
      <FadeIn delay={0.4}>
        <SectionLogoSlider />
      </FadeIn>
      <FadeIn delay={0.5}>
        <Heading className="mt-12">Case studies</Heading>
        <SectionCasestudy />
      </FadeIn>
    </section>
  );
};
export default Home;
