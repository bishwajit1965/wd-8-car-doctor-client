import { Link } from "react-router-dom";
import checkoutBannerImage from "../../../assets/images/checkout/checkout.png";

const CheckOutBanner = () => {
  return (
    <div className="relative">
      <img src={checkoutBannerImage} alt="" className="w-full" />
      <div className="absolute bottom-0 text-white transform translate-x left-1/2">
        <div className="bg-orange-600 p-2 rounded-t-lg">
          <Link to="/" className="m-0">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOutBanner;
