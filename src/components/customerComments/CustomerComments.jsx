import { FaQuoteRight, FaStar } from "react-icons/fa";

import ClientLogo from "../../assets/icons/person.svg";
import Quotation from "../../assets/icons/quote.svg";
import SectionTitleCenter from "../common/sectionTitleCenter/SectionTitleCenter";

const CustomerComments = () => {
  return (
    <div className="p-2">
      <SectionTitleCenter
        slogan={"--- Testimonials ---"}
        title={"What Customer Says"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
        }
      />
      <div className="lg:-mt-24 lg:pb-5">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-96">
            <div className="absolute transform translate-y top-1/3 ">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 border space-y-6 rounded-md p-10">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-center transform -translate-y left-5 right-5  bottom-2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="absolute transform translate-y top-1/3 ">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="absolute transform translate-y top-1/3 ">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="absolute transform translate-y top-1/3 ">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="col-span-6 border space-y-6 p-10 rounded-md">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img src={ClientLogo} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">John Harrison</h1>
                        <h1 className="text-xl font-bold">Business Man</h1>
                      </div>
                    </div>
                    <div className="">
                      <FaQuoteRight className="text-amber-400 text-3xl" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex space-x-2 justify-center text-amber-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComments;
