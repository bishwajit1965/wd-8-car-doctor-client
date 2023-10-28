import SectionTitleCenter from "../common/sectionTitleCenter/SectionTitleCenter";
import whyChooseUsImageFive from "../../assets/icons/Group 38729.svg";
import whyChooseUsImageFour from "../../assets/icons/person.svg";
import whyChooseUsImageOne from "../../assets/icons/check.svg";
import whyChooseUsImageSix from "../../assets/icons/deliveryt.svg";
import whyChooseUsImageThree from "../../assets/icons/group.svg";
import whyChooseUsImageTwo from "../../assets/icons/Wrench.svg";

const WhyChooseUs = () => {
  return (
    <div className="p-2">
      <SectionTitleCenter
        slogan={"--- Core Features ---"}
        title={"Why Choose Us ?"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "
        }
      />
      <div className="lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 justify-between lg:gap-8 gap-4 lg:mb-10">
        <div className="col-span-2 border bg-white text-black rounded-lg flex justify-center shadow-xl p-8">
          <div className="text-center">
            <img src={whyChooseUsImageThree} alt="" className="flex mx-auto" />
            <p className="text-center font-bold mt-2">Expert team</p>
          </div>
        </div>
        <div className="col-span-2 border rounded-lg bg-orange-600 text-white flex justify-center shadow-xl p-8">
          <div className="text-center">
            <img src={whyChooseUsImageFive} alt="" className="flex mx-auto" />
            <p className="text-center font-bold mt-2">Timely Delivery</p>
          </div>
        </div>
        <div className="col-span-2 border bg-white text-black rounded-lg flex justify-center shadow-xl p-8">
          <div className="text-center">
            <img src={whyChooseUsImageFour} alt="" className="flex mx-auto" />
            <p className="text-center font-bold mt-2">24/7 Support</p>
          </div>
        </div>
        <div className="col-span-2 border bg-white text-black rounded-lg flex justify-center shadow-xl p-8">
          <div className="text-center">
            <img src={whyChooseUsImageTwo} alt="" className="flex mx-auto" />
            <p className="text-center font-bold mt-2">Best Equipment</p>
          </div>
        </div>
        <div className="col-span-2 border bg-white text-black rounded-lg flex justify-center shadow-xl p-8">
          <div className="text-center">
            <img src={whyChooseUsImageOne} alt="" className="flex mx-auto" />
            <p className="text-center font-bold mt-2">100% Guaranty</p>
          </div>
        </div>
        <div className="col-span-2 border bg-white text-black rounded-lg flex justify-center shadow-xl p-10">
          <div className="">
            <img src={whyChooseUsImageSix} alt="" className="flex mx-auto" />
            <p className="text-center font-bold mt-2">Timely Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
