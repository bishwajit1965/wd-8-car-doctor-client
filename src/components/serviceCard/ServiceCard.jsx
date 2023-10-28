import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description, facility } = service || {};
  return (
    <div className="col-span-4">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" className="h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center justify-between text-red-600">
            <span className="text-xl font-bold">Price: ${price}</span>
            <Link
              to={`/service-booking/${_id}`}
              className="m-0 flex items-center text-xl font-bold"
            >
              Book <FaArrowRight className="ml-2 mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
