import sliderImageFive from "../../assets/images/banner/5.jpg";
import sliderImageFour from "../../assets/images/banner/4.jpg";
import sliderImageOne from "../../assets/images/banner/1.jpg";
import sliderImageSix from "../../assets/images/banner/6.jpg";
import sliderImageThree from "../../assets/images/banner/3.jpg";
import sliderImageTwo from "../../assets/images/banner/2.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full lg:my-10 my-2">
      <div id="slide1" className="carousel-item relative w-full rounded-md">
        <img src={sliderImageOne} className="w-full rounded-md" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-slate-950 to-slate-600 opacity-80 transition-500 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 top-1/2 lg:pl-16 pl-2 lg:space-y-6 space-y-2">
          <h1 className="text-white lg:text-6xl font-bold lg:w-1/2">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white lg:w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="lg:flex items-center lg:space-x-2 space-y-2 lg:space-y-0">
            <div className="">
              <button className="btn lg:btn-md btn-sm bg-red-600 text-white rounded-md border-none">
                Discover More
              </button>
            </div>
            <div className="">
              <button className="btn lg:btn-md btn-sm btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 lg:bottom-8 bottom-2 space-x-4">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-red-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-md">
        <img src={sliderImageTwo} className="w-full rounded-md" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-slate-950 to-slate-600 opacity-70 transition-500 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 top-1/2 lg:pl-16 pl-2 lg:space-y-6 space-y-2">
          <h1 className="text-white lg:text-6xl font-bold lg:w-1/2">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white lg:w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="lg:flex items-center lg:space-x-2 space-y-2 lg:space-y-0">
            <div className="">
              <button className="btn lg:btn-md btn-sm bg-red-600 text-white rounded-md border-none">
                Discover More
              </button>
            </div>
            <div className="">
              <button className="btn lg:btn-md btn-sm btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 lg:bottom-8 bottom-2 space-x-4">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-red-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-md">
        <img src={sliderImageThree} className="w-full rounded-md" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-slate-950 to-slate-600 opacity-70 transition-500 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 top-1/2 lg:pl-16 pl-2 lg:space-y-6 space-y-2">
          <h1 className="text-white lg:text-6xl font-bold lg:w-1/2">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white lg:w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="lg:flex items-center lg:space-x-2 space-y-2 lg:space-y-0">
            <div className="">
              <button className="btn lg:btn-md btn-sm bg-red-600 text-white rounded-md border-none">
                Discover More
              </button>
            </div>
            <div className="">
              <button className="btn lg:btn-md btn-sm btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 lg:bottom-8 bottom-2 space-x-4">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-red-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-md">
        <img src={sliderImageFour} className="w-full rounded-md" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-slate-950 to-slate-600 opacity-70 transition-500 rounded-md"></div>
        <div className="absolute transform -translate-y-1/2 top-1/2 lg:pl-16 pl-2 lg:space-y-6 space-y-2">
          <h1 className="text-white lg:text-6xl font-bold lg:w-1/2">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white lg:w-1/2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="lg:flex items-center lg:space-x-2 space-y-2 lg:space-y-0">
            <div className="">
              <button className="btn lg:btn-md btn-sm bg-red-600 text-white rounded-md border-none">
                Discover More
              </button>
            </div>
            <div className="">
              <button className="btn lg:btn-md btn-sm btn-outline btn-success">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 lg:bottom-8 bottom-2 space-x-4">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-red-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
