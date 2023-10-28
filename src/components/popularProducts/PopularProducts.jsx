import { FaStar } from "react-icons/fa";
import SectionTitleCenter from "../common/sectionTitleCenter/SectionTitleCenter";
import productFive from "../../assets/images/products/5.png";
import productFour from "../../assets/images/products/4.png";
import productOne from "../../assets/images/products/1.png";
import productSix from "../../assets/images/products/6.png";
import productThree from "../../assets/images/products/3.png";
import productTwo from "../../assets/images/products/2.png";

const PopularProducts = () => {
  return (
    <div className="p-2 lg:mb-10">
      <SectionTitleCenter
        slogan={"--- Popular Products ---"}
        title={"Browse Our Products"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "
        }
      />
      <div className="lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 justify-between lg:gap-8 gap-4">
        <div className="col-span-4 shadow-lg p-4 rounded-lg">
          <div className="bg-base-200">
            <img
              src={productSix}
              alt=""
              className="w-full h-96 flex justify-center p-20"
            />
          </div>
          <div className="mt-4">
            <p className="flex space-x-2 justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="text-xl font-bold text-center mt-2">
              Car Engine Plug
            </h4>
            <p className="text-xl font-bold text-center text-red-500">
              $ 20.00
            </p>
          </div>
        </div>
        <div className="col-span-4 shadow-lg p-4 rounded-lg">
          <div className="bg-base-200">
            <img
              src={productFive}
              alt=""
              className="w-full h-96 flex justify-center p-20"
            />
          </div>
          <div className="mt-4">
            <p className="flex space-x-2 justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="text-xl font-bold text-center mt-2">
              Car Engine Plug
            </h4>
            <p className="text-xl font-bold text-center text-red-500">
              $ 20.00
            </p>
          </div>
        </div>
        <div className="col-span-4 shadow-lg p-4 rounded-lg">
          <div className="bg-base-200">
            <img
              src={productFour}
              alt=""
              className="w-full h-96 flex justify-center p-20"
            />
          </div>
          <div className="mt-4">
            <p className="flex space-x-2 justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="text-xl font-bold text-center mt-2">
              Car Engine Plug
            </h4>
            <p className="text-xl font-bold text-center text-red-500">
              $ 20.00
            </p>
          </div>
        </div>
        <div className="col-span-4 shadow-lg p-4 rounded-lg">
          <div className="bg-base-200">
            <img
              src={productThree}
              alt=""
              className="w-full h-96 flex justify-center p-20"
            />
          </div>
          <div className="mt-4">
            <p className="flex space-x-2 justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="text-xl font-bold text-center mt-2">
              Car Engine Plug
            </h4>
            <p className="text-xl font-bold text-center text-red-500">
              $ 20.00
            </p>
          </div>
        </div>
        <div className="col-span-4 shadow-lg p-4 rounded-lg">
          <div className="bg-base-200">
            <img
              src={productTwo}
              alt=""
              className="w-full h-96 flex justify-center p-20"
            />
          </div>
          <div className="mt-4">
            <p className="flex space-x-2 justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="text-xl font-bold text-center mt-2">
              Car Engine Plug
            </h4>
            <p className="text-xl font-bold text-center text-red-500">
              $ 20.00
            </p>
          </div>
        </div>
        <div className="col-span-4 shadow-lg p-4 rounded-lg">
          <div className="bg-base-200">
            <img
              src={productOne}
              alt=""
              className="w-full h-96 flex justify-center p-20"
            />
          </div>
          <div className="mt-4">
            <p className="flex space-x-2 justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="text-xl font-bold text-center mt-2">
              Car Engine Plug
            </h4>
            <p className="text-xl font-bold text-center text-red-500">
              $ 20.00
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-20 flex justify-center">
        <button className="btn btn-outline btn-secondary">More Products</button>
      </div>
    </div>
  );
};

export default PopularProducts;
