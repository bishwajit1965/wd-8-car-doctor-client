import { useContext, useEffect, useState } from "react";

import AboutUs from "../../components/aboutUs/AboutUs";
import { AuthContext } from "../../providers/AuthProvider";
import Banner from "../../components/banner/Banner";
import CustomerComments from "../../components/customerComments/CustomerComments";
import { Helmet } from "react-helmet-async";
import MeetOurTeam from "../../components/meetOurTeam/MeetOurTeam";
import MoreServices from "../../components/moreServices/MoreServices";
import OurServices from "../../components/ourServices/OurServices";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import axios from "axios";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services", { withCredentials: true })
      .then((response) => {
        setServices(response.data);
      });
    // fetch("http://localhost:5000/services")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setServices(data);
    //   });
  }, []);
  return (
    <div>
      <Helmet title="Car doctor || Home" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>

      <div className="">
        <Banner />
      </div>
      <div className="">
        <AboutUs />
      </div>
      <div className="">
        <OurServices services={services} />
      </div>
      <div className="">
        <MoreServices />
      </div>
      <div className="">
        <PopularProducts />
      </div>
      <div className="">
        <MeetOurTeam />
      </div>
      <div className="">
        <WhyChooseUs />
      </div>
      <div className="">
        <CustomerComments />
      </div>
    </div>
  );
};

export default Home;
