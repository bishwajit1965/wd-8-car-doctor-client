import SectionTitleCenter from "../common/sectionTitleCenter/SectionTitleCenter";
import ServiceCard from "../serviceCard/ServiceCard";

const OurServices = ({ services }) => {
  return (
    <div className="lg:mt-36 lg:mb-10 p-2">
      <SectionTitleCenter
        slogan={"--- Services ---"}
        title={"Our Service Area"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 justify-between ">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
