import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import SectionTitleCenter from "../common/sectionTitleCenter/SectionTitleCenter";
import teamImageOne from "../../assets/images/team/1.jpg";
import teamImageThree from "../../assets/images/team/3.jpg";
import teamImageTwo from "../../assets/images/team/2.jpg";

const MeetOurTeam = () => {
  return (
    <div className="p-2">
      <SectionTitleCenter
        slogan={"--- Team ---"}
        title={"Meet Our Team"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "
        }
      />
      <div className="lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 justify-between lg:gap-8 gap-4 lg:mb-10">
        <div className="col-span-4 border rounded-lg shadow-lg pb-4">
          <img src={teamImageOne} alt="" className="rounded-lg p-4" />
          <div className="flex justify-center mt-2">
            <div className="">
              <h2 className="text-xl font-bold">Car Engine Plug</h2>
              <h3 className="text-xl font-bold">Engine Expert</h3>
              <p className="text-sl"></p>
              <div className="flex items-center my-2 space-x-2">
                <button className="btn btn-circle btn-primary">
                  <FaFacebook className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-secondary">
                  <FaTwitter className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-primary">
                  <FaInstagram className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-success">
                  <FaLinkedin className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 border rounded-lg shadow-lg pb-4">
          <img src={teamImageTwo} alt="" className="rounded-lg p-4" />
          <div className="flex justify-center mt-2">
            <div className="">
              <h2 className="text-xl font-bold">Car Engine Plug</h2>
              <h3 className="text-xl font-bold">Engine Expert</h3>
              <p className="text-sl"></p>
              <div className="flex items-center my-2 space-x-2">
                <button className="btn btn-circle btn-primary">
                  <FaFacebook className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-secondary">
                  <FaTwitter className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-primary">
                  <FaInstagram className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-success">
                  <FaLinkedin className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 border rounded-lg shadow-lg pb-4">
          <img src={teamImageThree} alt="" className="rounded-lg p-4" />
          <div className="flex justify-center mt-2">
            <div className="">
              <h2 className="text-xl font-bold">Car Engine Plug</h2>
              <h3 className="text-xl font-bold">Engine Expert</h3>
              <p className="text-sl"></p>
              <div className="flex items-center my-2 space-x-2">
                <button className="btn btn-circle btn-primary">
                  <FaFacebook className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-secondary">
                  <FaTwitter className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-primary">
                  <FaInstagram className="text-2xl" />
                </button>
                <button className="btn btn-circle btn-success">
                  <FaLinkedin className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
