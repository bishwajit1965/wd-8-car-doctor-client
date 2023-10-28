import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarTimes,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPhoneSlash,
  FaSearchLocation,
} from "react-icons/fa";

import SectionTitleCenter from "../common/sectionTitleCenter/SectionTitleCenter";

const MoreServices = () => {
  return (
    <div className="lg:my-10 p-2">
      <div className="flex justify-center">
        <button className="btn btn-outline btn-secondary">More Services</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 bg-black text-white rounded-lg p-16 lg:mt-14 mt-4">
        <div className="col-span-4 flex items-center space-x-2">
          <div className="">
            <FaCalendarAlt className="text-4xl" />
          </div>
          <div className="">
            <p className="text-xs">We are open Monday-Friday</p>
            <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="col-span-4 flex items-center space-x-2">
          <div className="">
            <FaPhoneAlt className="text-4xl" />
          </div>
          <div className="">
            <p className="text-xs">Have a question?</p>
            <p className="text-xl font-bold">7:00 am - 9:00 p+2546 251 2658m</p>
          </div>
        </div>
        <div className="col-span-4 flex items-center space-x-2">
          <div className="">
            <FaMapMarkerAlt className="text-4xl" />
          </div>
          <div className="">
            <p className="text-xs">Need a repair? our address</p>
            <p className="text-xl font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
