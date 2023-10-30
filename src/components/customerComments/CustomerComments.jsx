import { FaQuoteRight, FaStar } from "react-icons/fa";

import ClientLogo from "../../assets/icons/person.svg";
import CoolBgImageFour from "../../assets/testimonial-bgs/cool-background4.png";
import CoolBgImageOne from "../../assets/testimonial-bgs/cool-background1.png";
import CoolBgImageThree from "../../assets/testimonial-bgs/cool-background3.png";
import CoolBgImageTwo from "../../assets/testimonial-bgs/cool-background2.png";
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
      <div className="lg:mt-20">
        <div className="carousel w-full lg:text-white lg:shadow-lg">
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src={CoolBgImageOne}
              className="w-full rounded-md hidden lg:block"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 lg:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg opacity-30"></div>
            <div className="absolute transform -translate-y lg:top-1/4">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 shadow-md lg:space-y-6 rounded-md p-2 lg:p-10 lg:ml-10">
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
                <div className="col-span-6 shadow-md lg:space-y-6 rounded-md p-2 lg:p-10 lg:mr-10">
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
              <a
                href="#slide8"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❮
              </a>
              <a
                href="#slide6"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img src={CoolBgImageTwo} className="w-full rounded-md" />
            <div className="absolute top-0 left-0 right-0 bottom-0 lg:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg opacity-30"></div>
            <div className="absolute transform -translate-y top-1/4">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 shadow-md lg:space-y-6 rounded-md p-2 lg:p-10 lg:ml-10">
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
                <div className="col-span-6 shadow-md lg:space-y-6 rounded-md p-2 lg:p-10 lg:mr-10">
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
              <a
                href="#slide5"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❮
              </a>
              <a
                href="#slide7"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <img src={CoolBgImageThree} className="w-full rounded-md" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg opacity-30"></div>
            <div className="absolute transform -translate-y top-1/4">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 shadow-md lg:space-y-6 rounded-md p-2 lg:p-10 lg:ml-10">
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
                <div className="col-span-6 border-gray-500 shadow-md lg:space-y-6 p-10 rounded-md lg:mr-10">
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
              <a
                href="#slide6"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❮
              </a>
              <a
                href="#slide8"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide8" className="carousel-item relative w-full">
            <img src={CoolBgImageFour} className="w-full rounded-md" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg opacity-30"></div>
            <div className="absolute transform -translate-y top-1/4">
              <div className="grid lg:grid-cols-12 gap-6 justify-between">
                <div className="col-span-6 shadow-md lg:space-y-6 p-10 rounded-md lg:ml-10">
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
                <div className="col-span-6 shadow-md lg:space-y-6 p-10 rounded-md lg:mr-10">
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
              <a
                href="#slide7"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
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
