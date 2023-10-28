import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import CheckOutBanner from "../../components/common/checkOutBanner/CheckOutBanner";
import { Helmet } from "react-helmet-async";
import SectionTitleCenter from "../../components/common/sectionTitleCenter/SectionTitleCenter";
import TableRow from "../../components/tableRow/TableRow";
import axios from "axios";

const Bookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((response) => {
      setBookings(response.data);
    });
  }, [url]);

  let id = 1;
  return (
    <div className="lg:my-10">
      <Helmet title="Car doctor || Bookings" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>

      <CheckOutBanner />
      <div className="lg:my-4">
        <SectionTitleCenter title={"Bookings Cart"} />
      </div>

      <div className="lg:my-5 bg-base-200 lg:p-16 p-2 rounded-lg">
        <h1 className="text-xl font-bold capitalize">
          Bookings of {user?.displayName}{" "}
          <span className="text-red-500">
            {"("}
            {bookings.length}
            {")"}
          </span>
        </h1>
        <div className="overflow-x-auto lg:mt-6">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Service Name</th>
                <th>price </th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <TableRow
                  key={booking._id}
                  booking={booking}
                  bookings={bookings}
                  setBookings={setBookings}
                  id={id++}
                />
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Service Name</th>
                <th>price </th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions </th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
