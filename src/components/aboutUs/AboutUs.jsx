import AboutUsParts from "../../assets/images/about_us/parts.jpg";
import AboutUsPerson from "../../assets/images/about_us/person.jpg";
import SectionTitle from "../common/sectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-center lg:gap-12 gap-6 lg:my-10 my-2 p-2">
      <div className="col-span-6 relative">
        <div className="pr-10">
          <img src={AboutUsPerson} alt="" className="rounded-md h-full" />
        </div>
        <img
          src={AboutUsParts}
          alt=""
          className="rounded-md absolute top-1/2 h-3/4 right-0 object-scale-down"
        />
      </div>
      <div className="col-span-6">
        <SectionTitle
          slogan="--- About Us ---"
          title={
            <span>
              <h1 className="lg:w-9/12">
                We are qualified & of experience in this field
              </h1>
            </span>
          }
          description=" There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don't look even
              slightly believable the majority have suffered alteration in some
              form, by injected humour, or randomized words which don't look
              even slightly believable."
        />
        <div className="mt-6">
          <button className="btn btn-md bg-red-600 text-white border-none hover:text-black">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
