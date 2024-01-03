import Slider from "react-slick";

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
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(
        <div className="my-6">
<Slider {...settings} >
          <div className="px-3">
           <img src="/india/01.png" />
          </div>
          <div className="px-3">
           <img src="/india/02.png" />
          </div>
          <div className="px-3">
           <img src="/india/03.png" />
          </div>
          <div className="px-3">
           <img src="/india/04.png" />
          </div>
          <div className="px-3">
           <img src="/india/05.png" />
          </div>
          </Slider>
        </div>
        
    )
}

export default IndiaSlider