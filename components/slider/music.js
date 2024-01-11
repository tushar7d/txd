import Slider from "react-slick";
import Image from 'next/image'

let Music = ()=>{
    const settings = {
        autoplay: true,
    autoplaySpeed: 3000,
   
    infinite: true,
    cssEase: "linear",
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
    return(
        <div className="my-6">
<Slider {...settings} >
          <div className="px-3">
           <Image width={200} height={200} src="/music/01.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/02.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/03.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/04.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/05.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/06.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/07.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/08.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/09.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/10.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/11.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/12.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/13.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/14.png" />
          </div>
          <div className="px-3">
          <Image width={200} height={200} src="/music/15.png" />
          </div>
          </Slider>
        </div>
        
    )
}

export default Music