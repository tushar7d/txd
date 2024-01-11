import Slider from "react-slick";
import Image from 'next/image'

let IndiaSlider = ()=>{
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
           <Image width={178} height={267} src="/books/01.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/02.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/03.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/04.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/05.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/06.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/07.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/08.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/09.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/10.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/11.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/12.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/13.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/14.png" />
          </div>
          <div className="px-3">
          <Image width={178} height={267} src="/books/15.png" />
          </div>
          </Slider>
        </div>
        
    )
}

export default IndiaSlider